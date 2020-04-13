import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader } from './../../components/panel/panel.jsx';
import Moment from 'moment';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ListServer extends Component{
	state = {
		data: []
	};
	componentDidMount(){
		const URI = "http://localhost:8080/";
		const apiServer = 'serverList';

		fetch(URI + apiServer)
			.then(res => res.json())
			.then(data => this.setState({
				data
			}));
	}
	render(){
		const data = this.state.data;
		console.log(data);
		const defaultSorted = [{
			id: "name",
			desc: false
		}];

		const tableColumns = [{
			Header: "Servidores",
			columns: [
				{
					Header: "Nombre",
					accessor: "name",
					Cell: row => (
						<Link to={ "/serverGraph/" + row.original.id }>{ row.row.name }</Link>
					)
				},{
					Header: "Output",
					accessor: "output"
				},{
					Header: "IP",
					accessor: "address"
				},{
					Header: "Estado",
					accessor: "current_state",
					Cell: row => (
						<span>
							<i className="fa fa-circle f-s-7 fa-fw m-r-10 pull-left m-t-5" style={{
								color: row.row.current_state >= 2 ? '#ff5b57'
									: row.row.current_state === 1 ? '#f59c1a'
									: '#00acac',
								transition: 'all .3s ease'
							}}>
							</i> {
								row.row.current_state >= 2 ? 'Abajo'
								: row.row.current_state === 1 ? 'Alerta'
								: 'Arriba'
							}
						</span>
					)
				},{
					Header: "Ultimo cambio",
					accessor: "modified_on",
					Cell: row => (
						<span> { Moment(row.row.modified_on).format('YYYY/MM/DD HH:mm a') } </span>
					)
				}
			]
		}];
		return(
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item active">Servidores</li>
				</ol>
				<h1 className="page-header">React Table <small>official documentation <a href="https://react-table.js.org/#/story/readme" target="_blank" rel="noopener noreferrer">here</a></small></h1>
				<Panel>
					<PanelHeader>
						React Table
					</PanelHeader>
					<ReactTable filterable data={data} columns={tableColumns} defaultPageSize={10} defaultSorted={defaultSorted} className="-highlight" />
				</Panel>
			</div>
		);
	}
}

export default ListServer;