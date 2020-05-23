import React from 'react';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';
import d3 from 'd3';
import { Panel, PanelHeader } from './../../components/panel/panel.jsx';
import MapChart from '../../components/map-chart/map-chart';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			serverUp: 0,
			serverWarning: 0,
			serverCritical: 0,
			totalServer: 0,
			totalUserConnected: 0
		}
		
		this.formatDate = (d) => {
			var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			d = new Date(d);
			d = monthsName[d.getMonth()] + ' ' + d.getDate();
			return d;
		}
		this.getDate = (minusDate) => {
			var d = new Date();
			d = d.setDate(d.getDate() - minusDate);
			return d;
		}
		
		this.donutChartOptions = {
			donut: true,
			showLegend: false,
			growOnHover: false,
			arcsRadius: [
				{ inner: 0.65, outer: 0.93 },
				{ inner: 0.6, outer: 1 }
			],
			margin: { 'left': 10,'right':  10,'top': 10,'bottom': 10 },
			donutRatio: 0.5,
			labelFormat: d3.format(',.0f')
		};
		this.donutChartData = [
			{ 'label': 'Ataque1', 'value': 784466, 'color': '#348fe2' }, 
			{ 'label': 'Ataque2', 'value': 416747, 'color': '#00ACAC' }
		];
		
		this.areaChartOptions = {
			pointSize: 0.5,
			useInteractiveGuideline: true,
			durection: 300,
			showControls: false,
			controlLabels: {
				stacked: 'Stacked'
			},
			yAxis: {
				tickFormat: d3.format(',.0f')
			},
			xAxis: {
				tickFormat: function(d) {
					var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
					d = new Date(d);
					d = monthsName[d.getMonth()] + ' ' + d.getDate();
					return d;
				}
			}
		};
		this.areaChartData = [{
			'key' : 'Unique Visitors',
			'color' : '#5AC8FA',
			'values' : [ 
				{ x: this.getDate(77), y: 13 }, { x: this.getDate(76), y: 13 },  { x: this.getDate(75), y: 6  }, 
				{ x: this.getDate(73), y: 6  },  { x: this.getDate(72), y: 6  },  { x: this.getDate(71), y: 5  },  { x: this.getDate(70), y: 5  }, 
				{ x: this.getDate(69), y: 5  },  { x: this.getDate(68), y: 6  },  { x: this.getDate(67), y: 7  },  { x: this.getDate(66), y: 6  }, 
				{ x: this.getDate(65), y: 9  },  { x: this.getDate(64), y: 9  },  { x: this.getDate(63), y: 8  },  { x: this.getDate(62), y: 10 }, 
				{ x: this.getDate(61), y: 10 },  { x: this.getDate(60), y: 10 },  { x: this.getDate(59), y: 10 },  { x: this.getDate(58), y: 9  }, 
				{ x: this.getDate(57), y: 9  },  { x: this.getDate(56), y: 10 },  { x: this.getDate(55), y: 9  },  { x: this.getDate(54), y: 9  }, 
				{ x: this.getDate(53), y: 8  },  { x: this.getDate(52), y: 8  },  { x: this.getDate(51), y: 8  },  { x: this.getDate(50), y: 8  }, 
				{ x: this.getDate(49), y: 8  },  { x: this.getDate(48), y: 7  },  { x: this.getDate(47), y: 7  },  { x: this.getDate(46), y: 6  }, 
				{ x: this.getDate(45), y: 6  },  { x: this.getDate(44), y: 6  },  { x: this.getDate(43), y: 6  },  { x: this.getDate(42), y: 5  }, 
				{ x: this.getDate(41), y: 5  },  { x: this.getDate(40), y: 4  },  { x: this.getDate(39), y: 4  },  { x: this.getDate(38), y: 5  }, 
				{ x: this.getDate(37), y: 5  },  { x: this.getDate(36), y: 5  },  { x: this.getDate(35), y: 7  },  { x: this.getDate(34), y: 7  }, 
				{ x: this.getDate(33), y: 7  },  { x: this.getDate(32), y: 10 },  { x: this.getDate(31), y: 9  },  { x: this.getDate(30), y: 9  }, 
				{ x: this.getDate(29), y: 10 },  { x: this.getDate(28), y: 11 },  { x: this.getDate(27), y: 11 },  { x: this.getDate(26), y: 8  }, 
				{ x: this.getDate(25), y: 8  },  { x: this.getDate(24), y: 7  },  { x: this.getDate(23), y: 8  },  { x: this.getDate(22), y: 9  }, 
				{ x: this.getDate(21), y: 8  },  { x: this.getDate(20), y: 9  },  { x: this.getDate(19), y: 10 },  { x: this.getDate(18), y: 9  }, 
				{ x: this.getDate(17), y: 10 },  { x: this.getDate(16), y: 16 },  { x: this.getDate(15), y: 17 },  { x: this.getDate(14), y: 16 }, 
				{ x: this.getDate(13), y: 17 },  { x: this.getDate(12), y: 16 },  { x: this.getDate(11), y: 15 },  { x: this.getDate(10), y: 14 }, 
				{ x: this.getDate(9) , y: 24 },  { x: this.getDate(8) , y: 18 },  { x: this.getDate(7) , y: 15 },  { x: this.getDate(6) , y: 14 }, 
				{ x: this.getDate(5) , y: 16 },  { x: this.getDate(4) , y: 16 },  { x: this.getDate(3) , y: 17 },  { x: this.getDate(2) , y: 7  }, 
				{ x: this.getDate(1) , y: 7  },  { x: this.getDate(0) , y: 7  }
			]
		}, {
			'key' : 'Page Views',
			'color' : '#348fe2',
			'values' : [ 
				{ x: this.getDate(77), y: 14 },  { x: this.getDate(76), y: 13 },  { x: this.getDate(75), y: 15 }, 
				{ x: this.getDate(73), y: 14 },  { x: this.getDate(72), y: 13 },  { x: this.getDate(71), y: 15 },  { x: this.getDate(70), y: 16 }, 
				{ x: this.getDate(69), y: 16 },  { x: this.getDate(68), y: 14 },  { x: this.getDate(67), y: 14 },  { x: this.getDate(66), y: 13 }, 
				{ x: this.getDate(65), y: 12 },  { x: this.getDate(64), y: 13 },  { x: this.getDate(63), y: 13 },  { x: this.getDate(62), y: 15 }, 
				{ x: this.getDate(61), y: 16 },  { x: this.getDate(60), y: 16 },  { x: this.getDate(59), y: 17 },  { x: this.getDate(58), y: 17 }, 
				{ x: this.getDate(57), y: 18 },  { x: this.getDate(56), y: 15 },  { x: this.getDate(55), y: 15 },  { x: this.getDate(54), y: 15 }, 
				{ x: this.getDate(53), y: 19 },  { x: this.getDate(52), y: 19 },  { x: this.getDate(51), y: 18 },  { x: this.getDate(50), y: 18 }, 
				{ x: this.getDate(49), y: 17 },  { x: this.getDate(48), y: 16 },  { x: this.getDate(47), y: 18 },  { x: this.getDate(46), y: 18 }, 
				{ x: this.getDate(45), y: 18 },  { x: this.getDate(44), y: 16 },  { x: this.getDate(43), y: 14 },  { x: this.getDate(42), y: 14 }, 
				{ x: this.getDate(41), y: 13 },  { x: this.getDate(40), y: 14 },  { x: this.getDate(39), y: 13 },  { x: this.getDate(38), y: 10 }, 
				{ x: this.getDate(37), y: 9  },  { x: this.getDate(36), y: 10 },  { x: this.getDate(35), y: 11 },  { x: this.getDate(34), y: 11 }, 
				{ x: this.getDate(33), y: 11 },  { x: this.getDate(32), y: 10 },  { x: this.getDate(31), y: 9  },  { x: this.getDate(30), y: 10 }, 
				{ x: this.getDate(29), y: 13 },  { x: this.getDate(28), y: 14 },  { x: this.getDate(27), y: 14 },  { x: this.getDate(26), y: 13 }, 
				{ x: this.getDate(25), y: 12 },  { x: this.getDate(24), y: 11 },  { x: this.getDate(23), y: 13 },  { x: this.getDate(22), y: 13 }, 
				{ x: this.getDate(21), y: 13 },  { x: this.getDate(20), y: 13 },  { x: this.getDate(19), y: 14 },  { x: this.getDate(18), y: 13 }, 
				{ x: this.getDate(17), y: 13 },  { x: this.getDate(16), y: 19 },  { x: this.getDate(15), y: 21 },  { x: this.getDate(14), y: 22 },
				{ x: this.getDate(13), y: 25 },  { x: this.getDate(12), y: 24 },  { x: this.getDate(11), y: 24 },  { x: this.getDate(10), y: 22 }, 
				{ x: this.getDate(9) , y: 16 },  { x: this.getDate(8) , y: 15 },  { x: this.getDate(7) , y: 12 },  { x: this.getDate(6) , y: 12 }, 
				{ x: this.getDate(5) , y: 15 },  { x: this.getDate(4) , y: 15 },  { x: this.getDate(3) , y: 15 },  { x: this.getDate(2) , y: 18 }, 
				{ x: this.getDate(2) , y: 18 },  { x: this.getDate(0) , y: 17 }
			]
		}];

		this.date = new Date();

		this.handleChangeSelect = event => {
			switch (event.target.value) {
				case '1':
					this.setState({
						serverUp: 8,
						serverWarning: 0,
						serverCritical: 0,
						totalServer: 1,
					});
					break;
				case '2':
					this.setState({
						serverUp: 1,
						serverWarning: 1,
						serverCritical: 5,
						totalServer: 1,
					});
					break;
				default:
					
					break;
			}
		}
	}


	componentDidMount(){
		const URI = window.location.protocol + "//" + window.location.hostname + ":8080/";
		console.log(URI);
		const apiServer = 'nagiosStatusServices';
		let serverUp = 0;
		let serverWarning = 0;
		let serverCritical = 0;

		fetch(URI + apiServer)
			.then(res => res.json())
			.then(data => {
				if(!data){
					return;
				}

				data.map(server => {
					switch (server.current_state) {
						case 0:
							serverUp++;
							break;
						case 1:
							serverWarning++;
							break;
						default:
							serverCritical++;
							break;
					}
				});

				this.setState({
					serverUp,
					serverWarning,
					serverCritical,
					totalServer: data.length,
				});
			})
	}
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item active"><Link to="/dashboard/v2">Home</Link></li>
				</ol>
				<h1 className="page-header">Estado de servicios</h1>
				<select className="browser-default custom-select mb-3" onChange={ this.handleChangeSelect }>
					<option>Todos Los Servidores</option>
					<option value="1">LocalHost</option>
					<option value="2">SRVWeb01</option>
				</select>
				<div className="row">
					<div className="col-xl-3 col-md-6">
						<Link to="/serverInfo">
							<div className="widget widget-stats bg-teal">
								<div className="stats-icon stats-icon-lg"><i className="fa fa-globe fa-fw"></i></div>
								<div className="stats-content">
									<div className="stats-title">Servicios Arriba</div>
									<div className="stats-number">{this.state.serverUp}</div>
									<div className="stats-progress progress">
										<div className="progress-bar" style={{width: `${(this.state.serverUp / this.state.totalServer) * 100}%`}}></div>
									</div>
									<div className="stats-desc">Porcentaje minimo de esta semana (100%)</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-xl-3 col-md-6">
						<Link to="/serverInfo">
							<div className="widget widget-stats bg-blue">
								<div className="stats-icon stats-icon-lg"><i className="fa fa-dollar-sign fa-fw"></i></div>
								<div className="stats-content">
									<div className="stats-title">Servicios Alertados</div>
									<div className="stats-number">{this.state.serverWarning}</div>
									<div className="stats-progress progress">
										<div className="progress-bar" style={{width: `${(this.state.serverWarning / this.state.totalServer) * 100}%`}}></div>
									</div>
									<div className="stats-desc">Porcentaje minimo de esta semana (100%)</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-xl-3 col-md-6">
						<Link to="/serverInfo">
							<div className="widget widget-stats bg-indigo">
								<div className="stats-icon stats-icon-lg"><i className="fa fa-archive fa-fw"></i></div>
								<div className="stats-content">
									<div className="stats-title">Servicios abajo</div>
									<div className="stats-number">{this.state.serverCritical}</div>
									<div className="stats-progress progress">
										<div className="progress-bar" style={{width: `${(this.state.serverCritical / this.state.totalServer) * 100}%`}}></div>
									</div>
									<div className="stats-desc">Porcentaje minimo de esta semana (100%)</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="widget widget-stats bg-dark">
							<div className="stats-icon stats-icon-lg"><i className="fa fa-comment-alt fa-fw"></i></div>
							<div className="stats-content">
								<div className="stats-title">Total usuarios conectados</div>
								<div className="stats-number">20</div>
								<div className="stats-progress progress">
									<div className="progress-bar" style={{width: '54.9%'}}></div>
								</div>
								<div className="stats-desc">Maximo (54.9%)</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-8 containerAlerts">
						<div className="widget-chart with-sidebar inverse-mode">
							<div className="widget-chart-content bg-dark">
								<h2 className="chart-title">
									Alerta de ataques
								</h2>
								<div className="widget-chart-full-width nvd3-inverse-mode">
									<NVD3Chart type="stackedAreaChart" datum={this.areaChartData} height={"400"} options={this.areaChartOptions} />
								</div>
							</div>
							<div className="widget-chart-sidebar bg-dark-darker">
								<div className="chart-number">
									2
									<small>Tipos de ataques</small>
								</div>
								<div className="flex-grow-1 d-flex align-items-center nvd3-inverse-mode">
									<NVD3Chart type="pieChart" datum={this.donutChartData} height={180} options={this.donutChartOptions} x="label" y="value" />
								</div>
								<ul className="chart-legend f-s-11">
									<li><i className="fa fa-circle fa-fw text-blue f-s-9 m-r-5 t-minus-1"></i> 34.0% <span>Ataque1</span></li>
									<li><i className="fa fa-circle fa-fw text-teal f-s-9 m-r-5 t-minus-1"></i> 56.0% <span>Ataque2</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-4">
						<Panel>
							<PanelHeader noButton={true}>
								Origen de ataques
							</PanelHeader>
							<div>
								<MapChart />
							</div>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
};

export default Dashboard;