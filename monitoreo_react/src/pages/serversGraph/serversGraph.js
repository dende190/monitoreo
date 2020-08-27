import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInitialState from '../../hooks/useInitialState';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Graph from './graph';
import ModalPay from '../../components/modals/modal_pay';
import { useState } from 'react';
import '../../assets/css/serversGraph/style.css';
import '../../assets/css/modals/style.css';

const ServersGraph = props => {
  const [hiden, setHiden] = useState(false);
  const URI = window.location.protocol + "//" + window.location.hostname + ":8081/";
  const apiGraphs = 'rrdtools/graphs.php';
  let { id } = useParams();
  let graphs = useInitialState(URI + apiGraphs + "?hostId=" + id);
  const handleClickOpenModal = () => {
    setHiden(true)
  }
  const handleClickCloseModal = () => {
    setHiden(false)
  }

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
                <b>INFORMACION DE SERVIDOR</b>
                <span className="text-grey ml-2">
                  <i className="fa fa-info-circle" id="popover6"></i>
                  <UncontrolledPopover trigger="hover" placement="top" target="popover6">
                    <PopoverHeader>Informacion:</PopoverHeader>
                    <PopoverBody>Informacion detallada del servidor.</PopoverBody>
                  </UncontrolledPopover>
                </span>
              </div>
              <h3 className="m-b-10">Sistema Operativo</h3>
              <div className="text-grey m-b-1">Linux Ubuntu 18.6</div>
            </div>
            <div className="widget-list widget-list-rounded inverse-mode">
              <Link className="widget-list-item rounded-0 p-t-3">
                <div className="widget-list-content">
                  <div className="widget-list-title">Espacio Disponible</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  257GB
                </div>
              </Link>
              <Link className="widget-list-item">
                <div className="widget-list-content">
                  <div className="widget-list-title">CPU's</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  4
                </div>
              </Link>
              <Link className="widget-list-item">
                <div className="widget-list-content">
                  <div className="widget-list-title">Home Dir</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  /home/dende
                </div>
              </Link>
              <Link className="widget-list-item">
                <div className="widget-list-content">
                  <div className="widget-list-title">Host Name</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  dende-GF63
                </div>
              </Link>
              <Link className="widget-list-item p-b-3">
                <div className="widget-list-content">
                  <div className="widget-list-title">Tiempo prendido</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  64028 Segundos
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="card border-0 bg-dark text-white mb-3">
            <div className="card-body contrainersScroll">
              <div className="mb-3 text-grey">
                <b>PROGRAMAS INSTALADOS</b>
                <span className="ml-2">
                  <i className="fa fa-info-circle" id="popover7"></i>
                  <UncontrolledPopover trigger="hover" placement="top" target="popover7">
                    <PopoverHeader>Lista de programas:</PopoverHeader>
                    <PopoverBody>Lista de programas instalados en el servidor.</PopoverBody>
                  </UncontrolledPopover>
                </span>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>Git</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>PHP</div>
                  <div className="text-grey">2019/12/03</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>Samba</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>Apache2</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>MySql</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>Python</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>ssh</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>apt</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>openal</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>htop</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>vim</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>perl</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
              <div className="d-flex align-items-center m-b-15">
                <div className="text-truncate">
                  <div>mongo</div>
                  <div className="text-grey">2020/01/12</div>
                </div>
                <div className="ml-auto text-center">
                  <div className="f-s-13">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="card border-0 bg-dark text-white mb-3">
            <div className="card-body contrainersScroll">
              <div className="mb-3 text-grey">
                <b>DIRECTORIOS MONITOREADOS</b>
                <span className="ml-2">
                  <i className="fa fa-info-circle" id="popover8"></i>
                  <UncontrolledPopover trigger="hover" placement="top" target="popover8">
                    <PopoverHeader>Lista de directorios:</PopoverHeader>
                    <PopoverBody>Lista de directorios que se estan monitoreando.</PopoverBody>
                  </UncontrolledPopover>
                </span>
              </div>
              <div className="row align-items-center p-b-1">
                <div className="col-8">
                  <div className="m-b-2 text-truncate">/tmp/test</div>
                  <div className="text-grey m-b-2 f-s-11">creacion: 2020/07/21</div>
                  <div className="text-grey m-b-2 f-s-11">ultima modificacion: 2020/07/21</div>
                  <div className="text-grey f-s-11 m-b-15 text-truncate">
                    Tamaño: 1GB
                  </div>
                  <button
                    className="btn btn-xs btn-indigo f-s-10 pl-2 pr-2"
                    onClick={ handleClickOpenModal }
                  >
                    Incidencias
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-primary"
          onClick={ handleClickOpenModal }
        >
          Generar Reporte
        </button>
      </div>
      <div className="row">
        {
          graphs &&
            graphs.map(graph => 
              <Graph key={graph.id} {...graph} />
            )
        }
      </div>
      <div className={!hiden ? 'modal_hiden' : 'modal_show'}>
        <div className="modal_content">
          <div
            className="modal_close"
            onClick={ handleClickCloseModal }
          >
            <p>x</p>
          </div>
          <div className="modal_content_text">
            <h1>Version de prueba</h1>
            <hr/>
            <p>Por favor contacte a ERC Colombia para contratar KRAKEN para su empresa</p>
            <div className="modal_content_button">
              <a href="tel:+573024221917">
                <button className="btn btn-primary">Llamar</button>
              </a>
              <a href="mailto:dende149@gmail.com">
                <button className="btn btn-primary">Envier Correo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServersGraph;