import React, { Fragment, useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

const Login = () => {
	localStorage.setItem('user', '');
	const [form, setForm] = useState({});
	let history = useHistory();

	const handeInput = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		});
	}

	const handeSubmit = event => {
		event.preventDefault();
		localStorage.setItem('user', 'juan pablo test');
		history.push('/');
	}

	return (
		<Fragment>
			<div className="login-cover">
				<div className="login-cover-image" style={{ backgroundImage: 'url(/assets/img/login-bg/login-bg-17.jpg)'}}></div>
				<div className="login-cover-bg"></div>
			</div>
	
			<div className="login login-v2">
				<div className="login-header">
					<div className="brand">
						<span className="logo"></span><strong>ERC</strong> Colombia
					</div>
					<div className="icon">
						<i className="fa fa-lock"></i>
					</div>
				</div>
				<div className="login-content">
					<form className="margin-bottom-0" onSubmit={ handeSubmit }>
						<div className="form-group m-b-20">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Correo Electrónico"
								name="email"
								onChange={ handeInput }
								required
							/>
						</div>
						<div className="form-group m-b-20">
							<input
								type="password"
								className="form-control form-control-lg"
								placeholder="Contraseña"
								name="password"
								onChange={ handeInput }
								required
							/>
						</div>
						<div className="login-buttons">
							<button className="btn btn-success btn-block btn-lg">Iniciar Sesión</button>
						</div>
						<div className="m-t-20">
							¿Aun no estas registrado? <Link to="/register">registrarte.</Link>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
}

export default Login;