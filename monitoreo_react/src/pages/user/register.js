import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class Register extends React.Component {
	static contextType = PageSettings;
	
	constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
		this.context.handleSetBodyWhiteBg(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
		this.context.handleSetBodyWhiteBg(false);
	}
	
	handleSubmit(event) {
		event.preventDefault();
    	this.props.history.push('/');
	}
  
	render() {
		return (
			<div className="register register-with-news-feed">
				<div className="news-feed">
					<div className="news-image" style={{ backgroundImage: 'url(/assets/img/login-bg/login-bg-9.jpg)' }}></div>
					<div className="news-caption">
						<h4 className="caption-title"><b>ERC</b> Colombia</h4>
					</div>
				</div>
				<div className="right-content">
					<h1 className="register-header">
						Crea una cuenta
						<small>Es rapido y fácil.</small>
					</h1>
					<div className="register-content">
						<form className="margin-bottom-0" onSubmit={this.handleSubmit}>
							<label className="control-label">Nombre <span className="text-danger">*</span></label>
							<div className="row row-space-10">
								<div className="col-md-6 m-b-15">
									<input type="text" className="form-control" placeholder="Nombre" required />
								</div>
								<div className="col-md-6 m-b-15">
									<input type="text" className="form-control" placeholder="Apellido" required />
								</div>
							</div>
							<label className="control-label">Correo <span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="text" className="form-control" placeholder="Correo electronico" required />
								</div>
							</div>
							<label className="control-label">Confirmar correo<span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="text" className="form-control" placeholder="Confirmar correo electronico" required />
								</div>
							</div>
							<label className="control-label">Contraseña <span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="password" className="form-control" placeholder="contraseña" required />
								</div>
							</div>
							<label className="control-label">Confirmar contraseña <span className="text-danger">*</span></label>
							<div className="row m-b-15">
								<div className="col-md-12">
									<input type="password" className="form-control" placeholder="Confirmar contraseña" required />
								</div>
							</div>
							<div className="checkbox checkbox-css m-b-30">
								<div className="checkbox checkbox-css m-b-30">
									<input type="checkbox" id="agreement_checkbox" value="" />
									<label htmlFor="agreement_checkbox">
										Estoy de acuerdo con los <Link to="/user/register-v3">terminos</Link> de la empresa y he leido las <Link to="/user/register-v3">politicas</Link>, incluyendo el uso de <Link to="/user/register-v3">Cookies</Link>.
									</label>
								</div>
							</div>
							<div className="register-buttons">
								<button type="submit" className="btn btn-primary btn-block btn-lg">Crear mi cuenta</button>
							</div>
							<div className="m-t-20 m-b-40 p-b-40 text-inverse">
								¿ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
							</div>
							<hr />
							<p className="text-center">
								&copy; Color Admin All Right Reserved 2020
							</p>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Register);