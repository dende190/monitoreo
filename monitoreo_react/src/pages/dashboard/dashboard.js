import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';
import d3 from 'd3';
import { Panel, PanelHeader, PanelBody, PanelFooter } from './../../components/panel/panel.jsx';
import { Line } from 'react-chartjs-2';
import Sparkline from '@rowno/sparkline';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MapChart from '../../components/map-chart/map-chart';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			serverUp: 0,
			serverWarning: 0,
			serverCritical: 0,
			totalServer: 0,
			totalUserConnected: 39,
			logger: localStorage.user
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
				{ inner: 0.6, outer: 1 },
				{ inner: 0.6, outer: 1 }
			],
			margin: { 'left': 10,'right':  10,'top': 10,'bottom': 10 },
			donutRatio: 0.5,
			labelFormat: d3.format(',.0f')
		};
		this.donutChartData = [
			{ 'label': 'Ingresos sospechozos', 'value': 17, 'color': '#5AC8FA' }, 
			{ 'label': 'Posible SqlInjection', 'value': 13, 'color': '#348fe2' },
			{ 'label': 'Posible XSS', 'value': 12, 'color': '#76fb66' }
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
					var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
					d = new Date(d);
					d = monthsName[d.getMonth()] + ' ' + d.getDate();
					return d;
				}
			}
		};
		this.areaChartData = [{
			'key' : 'Ingresos sospechozos al servidor',
			'color' : '#5AC8FA',
			'values' : [ 
				{ x: this.getDate(7) , y: 1 },  { x: this.getDate(6) , y: 4 }, 
				{ x: this.getDate(5) , y: 1 },  { x: this.getDate(4) , y: 1 },  { x: this.getDate(3) , y: 2 },  { x: this.getDate(2) , y: 2  }, 
				{ x: this.getDate(1) , y: 3  },  { x: this.getDate(0) , y: 2  }
			]
		}, {
			'key' : 'Posible SqlInjection',
			'color' : '#348fe2',
			'values' : [ 
				{ x: this.getDate(7) , y: 1 },  { x: this.getDate(6) , y: 2 }, 
				{ x: this.getDate(5) , y: 1 },  { x: this.getDate(4) , y: 3 },  { x: this.getDate(3) , y: 1 },  { x: this.getDate(2) , y: 1 }, 
				{ x: this.getDate(1) , y: 1 },  { x: this.getDate(0) , y: 2 }
			]
		}, {
			'key' : 'Posible XSS',
			'color' : '#76fb66',
			'values' : [ 
				{ x: this.getDate(7) , y: 1 },  { x: this.getDate(6) , y: 1 }, 
				{ x: this.getDate(5) , y: 1 },  { x: this.getDate(4) , y: 1 },  { x: this.getDate(3) , y: 1 },  { x: this.getDate(2) , y: 2 }, 
				{ x: this.getDate(1) , y: 2 },  { x: this.getDate(0) , y: 2 }
			]
		}];

		this.lineChartData = {
			labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
			datasets: [{
				label: 'Visitas LocalHost',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(0, 172, 172, 0.25)',
				borderColor: '#00acac',
				borderWidth: 2,
				pointBorderColor: '#00acac',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#00acac',
				pointHoverBorderWidth: 3,
				pointRadius: 3,
				pointHitRadius: 10,
				data: [3, 2, 4, 1, 5]
			},{
				label: 'Visitas SRVWeb01',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(255, 91, 87, 0.25)',
				borderColor: '#ff5b57',
				borderWidth: 2,
				pointBorderColor: '#ff5b57',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#ff5b57',
				pointHoverBorderWidth: 3,
				pointRadius: 3,
				pointHitRadius: 10,
				data: [0, 0, 0, 0, 0]
			},{
				label: 'Visitas SRVWeb02',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(245, 156, 26, 0.25)',
				borderColor: '#f59c1a',
				borderWidth: 2,
				pointBorderColor: '#f59c1a',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#f59c1a',
				pointHoverBorderWidth: 3,
				pointRadius: 3,
				pointHitRadius: 10,
				data: [21, 15, 19, 24, 20]
			},{
				label: 'Visitas SRVWeb03',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(52, 143, 226, 0.25)',
				borderColor: '#348fe2',
				borderWidth: 2,
				pointBorderColor: '#348fe2',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#348fe2',
				pointHoverBorderWidth: 3,
				pointRadius: 3,
				pointHitRadius: 10,
				data: [10, 7, 20, 13, 14]
			}]
		}

		this.lineChartOptions = { 
			maintainAspectRatio: false, 
			scales: { 
				yAxes: [{ 
					ticks: { 
						beginAtZero:true,
						fontColor: 'black'
					}
				}],
				xAxes: [{ 
					ticks: { 
						fontColor: 'black'
					}
				}]
			},
			legend: {
				labels: {
					fontColor: 'black'
				}
			}
		}

		this.sparklineLocal = [{
			values: [3, 2, 4, 1, 5],
			colors: { area: 'transparent', line: '#ff5b57' }
		}];
		
		this.sparklineServer1 = [{
			values: [0, 0, 0, 0, 0],
			colors: { area: 'transparent', line: '#f59c1a' }
		}];
		
		this.sparklineServer2 = [{
			values: [21, 15, 19, 24, 20],
			colors: { area: 'transparent', line: '#00acac' }
		}];
		
		this.sparklineServer3 = [{
			values: [10, 7, 20, 13, 14],
			colors: { area: 'transparent', line: '#348fe2' }
		}];
		

		this.date = new Date();

		this.handleChangeSelect = event => {
			switch (event.target.value) {
				case '1':
					this.setState({
						serverUp: 4,
						serverWarning: 0,
						serverCritical: 0,
						totalServer: 1,
						totalUserConnected: 5,
					});
					break;
				case '2':
					this.setState({
						serverUp: 2,
						serverWarning: 1,
						serverCritical: 0,
						totalServer: 1,
						totalUserConnected: 0,
					});
					break;
				case '3':
					this.setState({
						serverUp: 2,
						serverWarning: 0,
						serverCritical: 3,
						totalServer: 1,
						totalUserConnected: 20,
					});
					break;
				case '4':
					this.setState({
						serverUp: 1,
						serverWarning: 0,
						serverCritical: 2,
						totalServer: 1,
						totalUserConnected: 14,
					});
					break;
				default:
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
		if (!this.state.logger) {
			return <Redirect to='/login'/>;
		}
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
					<option value="3">SRVWeb02</option>
					<option value="4">SRVWeb03</option>
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
								<div className="stats-number">{this.state.totalUserConnected}</div>
								<div className="stats-progress progress">
									<div className="progress-bar" style={{width: '54.9%'}}></div>
								</div>
								<div className="stats-desc">-</div>
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
									<li><i className="fa fa-circle fa-fw text-blue f-s-9 m-r-5 t-minus-1"></i> 39% <span>Ingresos sospechozos al servidor</span></li>
									<li><i className="fa fa-circle fa-fw text-teal f-s-9 m-r-5 t-minus-1"></i> 31% <span>Posible SqlInjection</span></li>
									<li><i className="fa fa-circle fa-fw text-teal f-s-9 m-r-5 t-minus-1"></i> 30% <span>Posible XSS</span></li>
								</ul>
							</div>
						</div>
						<Panel>
							<PanelHeader>Analitica de los servidores</PanelHeader>
							<PanelBody>
								<Line data={ this.lineChartData } height={ 300 } options={ this.lineChartOptions } />
							</PanelBody>
						</Panel>
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
						<Panel>
							<PanelHeader>Detalle de analitica</PanelHeader>
							<PanelBody className="p-0">
								<div className="table-responsive">
									<table className="table table-valign-middle mb-0">
										<thead>
											<tr>	
												<th className="p-l-15">Servidor</th>
												<th>Total</th>
												<th className="p-r-15">Trend</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="p-l-15"><label className="label label-danger">LocalHost</label></td>
												<td>5 <span className="text-success"><i className="fa fa-arrow-up"></i></span></td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineLocal} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-warning">SRVWeb01</label></td>
												<td>0 </td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineServer1} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-success">SRVWeb02</label></td>
												<td>20 <span className="text-success"><i className="fa fa-arrow-down"></i></span></td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineServer2} />
												</td>
											</tr>
											<tr>
												<td className="p-l-15"><label className="label label-primary">SRVWeb03</label></td>
												<td>15 <span className="text-success"><i className="fa fa-arrow-up"></i></span></td>
												<td className="p-r-15">
													<Sparkline width={100} height={20} lines={this.sparklineServer3} />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</PanelBody>
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-8">
						
					</div>
					<div className="col-xl-4">
								
					</div>
				</div>
			</div>
		)
	}
};

export default Dashboard;