import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInitialState from '../../hooks/useInitialState';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Graph from './graph';

const ServersGraph = () => {
	const URI = location.protocol + "://" + location.hostname + ":8081/";
	const apiGraphs = 'rrdtools/graphs.php';
	let { id } = useParams();
	let graphs = useInitialState(URI + apiGraphs + "?hostId=" + id);

	return (
		<div>
			<ol className="breadcrumb float-xl-right">
				<li className="breadcrumb-item"><Link to="/">Home</Link></li>
				<li className="breadcrumb-item"><Link to="/serverInfo">Servidores</Link></li>
				<li className="breadcrumb-item active">Graficas</li>
			</ol>
			<h1 className="page-header">NOMBRE SERVIDOR</h1>
			<div className="row">
				<div className="col-xl-4 col-lg-6">
					<div className="card border-0 bg-dark-darker text-white mb-3">
						<div className="card-body" style={{ background: 'no-repeat bottom right', backgroundImage: 'url(/assets/img/svg/img-4.svg)', backgroundSize: 'auto 60%'}}>
							<div className="mb-3 text-grey">
								<b>INFORMACION</b>
								<span className="text-grey ml-2">
									<i className="fa fa-info-circle" id="popover6"></i>
									<UncontrolledPopover trigger="hover" placement="top" target="popover6">
										<PopoverHeader>Sales by social source</PopoverHeader>
										<PopoverBody>Total online store sales that came from a social referrer source.</PopoverBody>
									</UncontrolledPopover>
								</span>
							</div>
							<h3 className="m-b-10">$55,547.89</h3>
							<div className="text-grey m-b-1"><i className="fa fa-caret-up"></i> 45.76% increased</div>
						</div>
						<div className="widget-list widget-list-rounded inverse-mode">
							<Link to="/dashboard/v3" className="widget-list-item rounded-0 p-t-3">
								<div className="widget-list-media icon">
									<i className="fab fa-apple bg-indigo text-white"></i>
								</div>
								<div className="widget-list-content">
									<div className="widget-list-title">Apple Store</div>
								</div>
								<div className="widget-list-action text-nowrap text-grey">
									$34,840.17
								</div>
							</Link>
							<Link to="/dashboard/v3" className="widget-list-item">
								<div className="widget-list-media icon">
									<i className="fab fa-facebook-f bg-blue text-white"></i>
								</div>
								<div className="widget-list-content">
									<div className="widget-list-title">Facebook</div>
								</div>
								<div className="widget-list-action text-nowrap text-grey">
									$12,502.67
								</div>
							</Link>
							<Link to="/dashboard/v3" className="widget-list-item">
								<div className="widget-list-media icon">
									<i className="fab fa-twitter bg-aqua text-white"></i>
								</div>
								<div className="widget-list-content">
									<div className="widget-list-title">Twitter</div>
								</div>
								<div className="widget-list-action text-nowrap text-grey">
									$4,799.20
								</div>
							</Link>
							<Link to="/dashboard/v3" className="widget-list-item">
								<div className="widget-list-media icon">
									<i className="fab fa-google bg-red text-white"></i>
								</div>
								<div className="widget-list-content">
									<div className="widget-list-title">Google Adwords</div>
								</div>
								<div className="widget-list-action text-nowrap text-grey">
									$3,405.85
								</div>
							</Link>
							<Link to="/dashboard/v3" className="widget-list-item p-b-3">
								<div className="widget-list-media icon">
									<i className="fab fa-instagram bg-pink text-white"></i>
								</div>
								<div className="widget-list-content">
									<div className="widget-list-title">Instagram</div>
								</div>
								<div className="widget-list-action text-nowrap text-grey">
									$0.00
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-6">
					<div className="card border-0 bg-dark text-white mb-3">
						<div className="card-body">
							<div className="mb-3 text-grey">
								<b>DETALLES</b>
								<span className="ml-2">
									<i className="fa fa-info-circle" id="popover7"></i>
									<UncontrolledPopover trigger="hover" placement="top" target="popover7">
										<PopoverHeader>Top products with units sold</PopoverHeader>
										<PopoverBody>Products with the most individual units sold. Includes orders from all sales channels.</PopoverBody>
									</UncontrolledPopover>
								</span>
							</div>
							<div className="d-flex align-items-center m-b-15">
								<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
									<div className="h-100 w-100" style={{ background: 'url(/assets/img/product/product-8.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
								</div>
								<div className="text-truncate">
									<div>Apple iPhone XR (2019)</div>
									<div className="text-grey">$799.00</div>
								</div>
								<div className="ml-auto text-center">
									<div className="f-s-13">195</div>
									<div className="text-grey f-s-10">sold</div>
								</div>
							</div>
							<div className="d-flex align-items-center m-b-15">
								<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
									<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-9.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
								</div>
								<div className="text-truncate">
									<div>Apple iPhone XS (2019)</div>
									<div className="text-grey">$1,199.00</div>
								</div>
								<div className="ml-auto text-center">
									<div className="f-s-13">185</div>
									<div className="text-grey f-s-10">sold</div>
								</div>
							</div>
							<div className="d-flex align-items-center m-b-15">
								<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
									<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-10.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
								</div>
								<div className="text-truncate">
									<div>Apple iPhone XS Max (2019)</div>
									<div className="text-grey">$3,399</div>
								</div>
								<div className="ml-auto text-center">
									<div className="f-s-13">129</div>
									<div className="text-grey f-s-10">sold</div>
								</div>
							</div>
							<div className="d-flex align-items-center m-b-15">
								<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
									<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-11.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
								</div>
								<div className="text-truncate">
									<div>Huawei Y5 (2019)</div>
									<div className="text-grey">$99.00</div>
								</div>
								<div className="ml-auto text-center">
									<div className="f-s-13">96</div>
									<div className="text-grey f-s-10">sold</div>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<div className="widget-img rounded-lg width-30 m-r-10 bg-white p-3">
									<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-12.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
								</div>
								<div className="text-truncate">
									<div>Huawei Nova 4 (2019)</div>
									<div className="text-grey">$499.00</div>
								</div>
								<div className="ml-auto text-center">
									<div className="f-s-13">55</div>
									<div className="text-grey f-s-10">sold</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-6">
					<div className="card border-0 bg-dark text-white mb-3">
						<div className="card-body">
							<div className="mb-3 text-grey">
								<b>REFERENCIAS EXTERNAS</b>
								<span className="ml-2">
									<i className="fa fa-info-circle" id="popover8"></i>
									<UncontrolledPopover trigger="hover" placement="top" target="popover8">
										<PopoverHeader>Marketing Campaign</PopoverHeader>
										<PopoverBody>Campaign that run for getting more returning customers.</PopoverBody>
									</UncontrolledPopover>
								</span>
							</div>
							<div className="row align-items-center p-b-1">
								<div className="col-4">
									<div className="height-100 d-flex align-items-center justify-content-center">
										<img src="/assets/img/svg/img-2.svg" alt="" className="mw-100 mh-100" />
									</div>
								</div>
								<div className="col-8">
									<div className="m-b-2 text-truncate">Email Marketing Campaign</div>
									<div className="text-grey m-b-2 f-s-11">Mon 12/6 - Sun 18/6</div>
									<div className="d-flex align-items-center m-b-2">
										<div className="flex-grow-1">
											<div className="progress progress-xs rounded-corner bg-white-transparent-1">
												<div className="progress-bar progress-bar-striped bg-indigo" style={{width: '80%'}}></div>
											</div>
										</div>
										<div className="ml-2 f-s-11 width-30 text-center">80%</div>
									</div>
									<div className="text-grey f-s-11 m-b-15 text-truncate">
										57.5% people click the email
									</div>
									<Link to="/dashboard/v3" className="btn btn-xs btn-indigo f-s-10 pl-2 pr-2">View campaign</Link>
								</div>
							</div>
							<hr className="bg-white-transparent-2 m-t-20 m-b-20" />
							<div className="row align-items-center">
								<div className="col-4">
									<div className="height-100 d-flex align-items-center justify-content-center">
										<img src="/assets/img/svg/img-3.svg" alt="" className="mw-100 mh-100" />
									</div>
								</div>
								<div className="col-8">
									<div className="m-b-2 text-truncate">Facebook Marketing Campaign</div>
									<div className="text-grey m-b-2 f-s-11">Sat 10/6 - Sun 18/6</div>
									<div className="d-flex align-items-center m-b-2">
										<div className="flex-grow-1">
											<div className="progress progress-xs rounded-corner bg-white-transparent-1">
												<div className="progress-bar progress-bar-striped bg-warning" style={{width: '60%'}}></div>
											</div>
										</div>
										<div className="ml-2 f-s-11 width-30 text-center">60%</div>
									</div>
									<div className="text-grey f-s-11 m-b-15 text-truncate">
										+124k visitors from facebook
									</div>
									<Link to="/dashboard/v3" className="btn btn-xs btn-warning f-s-10 pl-2 pr-2">View campaign</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				{
					graphs &&
						graphs.map(graph => 
							<Graph key={graph.id} {...graph} />
						)
				}
			</div>
		</div>
	);
}

export default ServersGraph;