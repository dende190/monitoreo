import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';
import krakenImage from '../../assets/img/login-bg/kraken.jpeg';

class LoginV2 extends React.Component {
  static contextType = PageSettings;

  constructor(props) {
    super(props);
    this.state = {};
    localStorage.clear();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handeInput = this.handeInput.bind(this);
  }

  componentDidMount() {
    this.context.handleSetPageSidebar(false);
    this.context.handleSetPageHeader(false);
  }

  componentWillUnmount() {
    this.context.handleSetPageSidebar(true);
    this.context.handleSetPageHeader(true);
  }

  handeInput(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const URI = window.location.protocol + "//" + window.location.hostname + ":8082/";
    const apiServer = 'login';
    
    fetch(URI + apiServer, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('email', data.email);
        localStorage.setItem('firstname', data.firstname);
        localStorage.setItem('lastname', data.lastname);
        this.props.history.push('/');
      })
      .catch(error => console.error('Error:', error));
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="login-cover">
          <div className="login-cover-image" style={{ backgroundImage: 'url(' + krakenImage + ')'}}></div>
          <div className="login-cover-bg"></div>
        </div>
    
        <div className="login login-v2">
          <div className="login-header">
            <div className="brand">
              <span className="logo"></span> <b>ERC</b> Colombia
            </div>
            <div className="icon">
              <i className="fa fa-lock"></i>
            </div>
          </div>
          <div className="login-content">
            <form className="margin-bottom-0" onSubmit={this.handleSubmit}>
              <div className="form-group m-b-20">
                <input
                  onChange={this.handeInput}
                  name="email"
                  id="email"
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Correo Electrónico"
                  required
                 />
              </div>
              <div className="form-group m-b-20">
                <input
                  onChange={this.handeInput}
                  name="password"
                  id="password"
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Contraseña"
                  required
                 />
              </div>
              <div className="checkbox checkbox-css m-b-20">
                <input type="checkbox" id="remember_checkbox" /> 
                <label htmlFor="remember_checkbox">
                  Recuerdame
                </label>
              </div>
              <div className="login-buttons">
                <button type="submit" className="btn btn-success btn-block btn-lg">Iniciar Sesión</button>
              </div>
              <div className="m-t-20">
                ¿Aun no estas registrado? <Link to="/register">registrarte.</Link>
              </div>
            </form>
          </div>
        </div>
      
      </React.Fragment>
    )
  }
}

export default withRouter(LoginV2);