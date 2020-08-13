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
    const URI = window.location.protocol + "//" + window.location.hostname + ":8082/";
    const apiServer = 'getUsers';

    fetch(URI + apiServer)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(!data){
          return;
        }
        this.setState({
          data  
        });
      });
  }
  render(){
    const data = this.state.data;
    const defaultSorted = [{
      id: "name",
      desc: false
    }];

    const tableColumns = [{
      Header: "Usuarios",
      columns: [
        {
          Header: "Nombre",
          accessor: "firstname"
        }, {
          Header: "Apellido",
          accessor: "lastname"
        }, {
          Header: "email",
          accessor: "email"
        }, {
          Header: "status",
          accessor: "status",
        }
      ]
    }];
    return(
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item active">Lista de usuarios</li>
        </ol>
        <h1 className="page-header">ERC Colombia<small> Usuarios </small></h1>
        <Panel>
          <PanelHeader>
            Tabla de Usuarios
          </PanelHeader>
          <ReactTable filterable data={data} columns={tableColumns} defaultPageSize={10} defaultSorted={defaultSorted} className="-highlight" />
        </Panel>
      </div>
    );
  }
}

export default ListServer;