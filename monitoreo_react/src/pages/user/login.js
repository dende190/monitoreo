import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class LoginV2 extends React.Component {
	static contextType = PageSettings;

	constructor(props) {
		super(props);

		this.state = {
			activeBg: '/assets/img/login-bg/login-bg-17.jpg',
			bg1: true,
			bg2: false,
			bg3: false,
			bg4: false,
			bg5: false,
			bg6: false
		}
		this.selectBg = this.selectBg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	selectBg(e, active, bg) {
		e.preventDefault();

		this.setState(state => ({
			activeBg: bg,
			bg1: (active === 'bg1') ? true : false,
			bg2: (active === 'bg2') ? true : false,
			bg3: (active === 'bg3') ? true : false,
			bg4: (active === 'bg4') ? true : false,
			bg5: (active === 'bg5') ? true : false,
			bg6: (active === 'bg6') ? true : false
		}));
	}

	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
	}
	
	handleSubmit(event) {
		event.preventDefault();
    	this.props.history.push('/');
  	}
  
	render() {
		return (
			<React.Fragment>
				<div className="login-cover">
					<div className="login-cover-image" style={{ backgroundImage: 'url(' + this.state.activeBg + ')'}}></div>
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
								<input type="text" className="form-control form-control-lg" placeholder="Correo Electrónico" required />
							</div>
							<div className="form-group m-b-20">
								<input type="password" className="form-control form-control-lg" placeholder="Contraseña" required />
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