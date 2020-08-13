import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInitialState from '../../hooks/useInitialState';
import { Panel, PanelHeader } from './../../components/panel/panel.jsx';
import Moment from 'moment';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const FileLogs = () => {
	const URI = window.location.protocol + "//" + window.location.hostname + ":8083/";
	const api = 'logs';
	let logs = useInitialState(URI + api);
	console.log(logs);

	const data = logs;
	const defaultSorted = [{
		id: "name",
		desc: false
	}];

	const tableColumns = [{
		Header: "Logs",
		columns: [
			{
				Header: "Directorio",
				accessor: "dir"
			},{
				Header: "Archivo",
				accessor: "file"
			},{
				Header: "Accion",
				accessor: "action"
			},{
				Header: "Fecha de modificacion",
				accessor: "created_on",
				Cell: row => (
					<span> { Moment(row.row.created_on).format('YYYY/MM/DD HH:mm a') } </span>
				)
			}
		]
	}];

	return (
		<div>
			<ol className="breadcrumb float-xl-right">
				<li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
				<li className="breadcrumb-item active">Servidores</li>
			</ol>
			<h1 className="page-header">ERC Colombia<small> Directortios monitoreados </small></h1>
			<Panel>
				<PanelHeader>
					Tabla de monitoreo
				</PanelHeader>
				<ReactTable filterable data={data} columns={tableColumns} defaultPageSize={10} defaultSorted={defaultSorted} className="-highlight" />
			</Panel>
		</div>
	);
}

export default FileLogs;