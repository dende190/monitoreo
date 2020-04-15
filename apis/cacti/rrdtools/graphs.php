<?php 

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');

// get database connection
include_once '../config/database.php';

function generateGraph($time = "-1d", $graphArray = []){
	$rraPath = dirname(__FILE__) . '/../rra';
	$imagesPath = dirname(__FILE__) . '/../images/imageServer.png';
	$database = new Database();
	$pdoCacti = $database->getConnection('cacti');
	$pdoNagios = $database->getConnection('nagios');
	$consolidation_functions = array(1 =>
		'AVERAGE',
		'MIN',
		'MAX',
		'LAST'
	);
	$hostNagiosQuery = $pdoNagios->prepare('SELECT address FROM nagios_hosts WHERE host_id = :serverId');
	$hostNagiosQuery->execute([':serverId' => $_GET['hostId']]);
	$hostNagiosResult = $hostNagiosQuery->fetchAll(PDO::FETCH_ASSOC);

	$hostCactiQuery = $pdoCacti->prepare('SELECT gl.id FROM host AS h JOIN graph_local AS gl ON gl.host_id = h.id WHERE hostname = :serverId');
	$hostCactiQuery->execute([':serverId' => $hostNagiosResult[0]['address']]);
	$hostCactiResult = $hostCactiQuery->fetchAll(PDO::FETCH_ASSOC);	

	if (!$hostCactiResult) {
		echo false;
		return;
	}

	$serverDataArray = [];
	foreach ($hostCactiResult as $key => $graphId) {
		$letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		$graphQuery = $pdoCacti->prepare('SELECT gl.id AS local_graph_id, gl.host_id,
			gl.snmp_query_id, gl.snmp_index, gtg.title_cache, gtg.vertical_label,
			gtg.slope_mode, gtg.auto_scale, gtg.auto_scale_opts, gtg.auto_scale_log,
			gtg.scale_log_units, gtg.auto_scale_rigid, gtg.auto_padding, gtg.base_value,
			gtg.upper_limit, gtg.lower_limit, gtg.height, gtg.width, gtg.image_format_id,
			gtg.unit_value, gtg.unit_exponent_value, gtg.alt_y_grid,
			gtg.right_axis, gtg.right_axis_label, gtg.right_axis_format, gtg.no_gridfit,
			gtg.unit_length, gtg.tab_width, gtg.dynamic_labels, gtg.force_rules_legend,
			gtg.legend_position, gtg.legend_direction, gtg.right_axis_formatter,
			gtg.left_axis_formatter
			FROM graph_templates_graph AS gtg
			INNER JOIN graph_local AS gl
			ON gl.id=gtg.local_graph_id
			WHERE gtg.local_graph_id = :graphId'
		);
		$graphQuery->execute([':graphId' => $graphId['id']]);
		$graphResult = $graphQuery->fetchAll(PDO::FETCH_ASSOC);

		$graphItemsQuery = $pdoCacti->prepare('SELECT gti.id AS graph_templates_item_id,
			gti.cdef_id, gti.vdef_id, gti.text_format, gti.value, gti.hard_return,
			gti.consolidation_function_id, gti.graph_type_id, gtgp.gprint_text,
			colors.hex, gti.alpha, gti.line_width, gti.dashes, gti.shift,
			gti.dash_offset, gti.textalign,
			dtr.id AS data_template_rrd_id, dtr.local_data_id,
			dtr.rrd_minimum, dtr.rrd_maximum, dtr.data_source_name, dtr.local_data_template_rrd_id
			FROM graph_templates_item AS gti
			LEFT JOIN data_template_rrd AS dtr
			ON gti.task_item_id=dtr.id
			LEFT JOIN colors
			ON gti.color_id=colors.id
			LEFT JOIN graph_templates_gprint AS gtgp
			ON gti.gprint_id=gtgp.id
			WHERE gti.local_graph_id = :graphId
			ORDER BY gti.sequence'
		);
		$graphItemsQuery->execute([':graphId' => $graphId['id']]);
		$graphItemsResult = $graphItemsQuery->fetchAll(PDO::FETCH_ASSOC);

		$configGraph = [
			"--start", $time,
			"--title='" . $graphResult[0]['title_cache'] . "'",
			"--vertical-label='" . $graphResult[0]['vertical_label'] . "'",
			"--base=" . $graphResult[0]['base_value'],
			"--height=" . $graphResult[0]['height'],
			"--width=" . $graphResult[0]['width'],
			"--alt-autoscale-max",
		];

		if ($graphResult[0]['slope_mode'] == 'on') {
			array_push($configGraph, "--slope-mode");
		}

		$cdef = 'CDEF:cdef=';
		foreach ($graphItemsResult as $key => $graphItem) {
			if (empty($graphItem['hex'])) {
				continue;
			}

			$graphColorArea = '#' . $graphItem['hex'] . $graphItem['alpha'];
			$letterDef = array_shift($letterArray);
			if ($graphItem['cdef_id']) {
				$cdef .= 'TIME,' . time() . ',GT,' . $letterDef . ',' . $letterDef . ',UN,0,' . $letterDef . ',IF,IF,';
			}
			$dataPathQuery = $pdoCacti->prepare('SELECT data_source_path FROM data_template_data WHERE local_data_id = :localDataId');
			$dataPathQuery->execute([':localDataId' => $graphItem['local_data_id']]);
			$dataPathResult = $dataPathQuery->fetchAll(PDO::FETCH_ASSOC);
			$rrdName = str_replace('<path_rra>', $rraPath, $dataPathResult[0]['data_source_path']);

			$def = "DEF:" . $letterDef . 
				"=" . $rrdName . 
				":" . $graphItem['data_source_name'] . 
				':' . $consolidation_functions[$graphItem['consolidation_function_id']];
			$area = "AREA:" . $letterDef . $graphColorArea . ':' . $graphItem['text_format'];
			$gprintLast = 'GPRINT:' . $letterDef . ':LAST:Current\:' . $graphItem['gprint_text'];
			$gprintAverage = 'GPRINT:' . $letterDef . ':AVERAGE:Average\:' . $graphItem['gprint_text'];
			$gprintMaximum = 'GPRINT:' . $letterDef . ':MAX:Maximum\:' . $graphItem['gprint_text'] . '\\n';
			$line = "LINE1:" . $letterDef . $graphColorArea . ":''";

			array_push($configGraph, $def, $line, $area, $gprintLast, $gprintAverage, $gprintMaximum);

		}

		if ($graphItemsResult[0]['cdef_id']) {
			$cdef .= '+,+';
			array_push($configGraph, $def);	
		}

		$ret = rrd_graph($imagesPath, $configGraph);

		if(!is_array($ret)) {
		    $err = rrd_error();
	  	}else{
	  		$typeImage = pathinfo($imagesPath, PATHINFO_EXTENSION);
		  	$dataImage = file_get_contents($imagesPath);
		  	$base64Image = 'data:image/' . $typeImage . ';base64,' . base64_encode($dataImage);
	  	}

	  	$serverDataArray[] = [
	  		'id' => $graphId['id'],
  	 		'name' => $graphResult[0]['title_cache'],
  	 		'base64Image' => $base64Image,
	  	];
	}

  	return $serverDataArray;

}

echo json_encode(generateGraph());
exit;