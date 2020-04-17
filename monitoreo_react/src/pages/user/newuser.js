import React from 'react';

const Newuser = () => {
	return (
		<div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Apellido</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Correo electronico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar correo"></input>
                    <small id="emailHelp" class="form-text text-muted">Nunca vamos a compartir tu correo.</small>                  
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Telefono</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar telefono"></input>
                    <small id="emailHelp" class="form-text text-muted">Nunca vamos a compartir tu numero de telefono.</small>                  
                </div>
                <div>
                    <label for="exampleInputEmail1">Seleccione empresa</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Empresa 1</option>
                        <option>Empresa 2</option>
                        <option>Empresa 3</option>
                        <option>Empresa 4</option>
                        <option>Empresa 5</option>
                    </select>
                </div>
                <div className="mt-3">
                    <label for="exampleDropdownFormPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña"></input>
                </div>
                <div className="mt-3">
                    <label for="exampleDropdownFormPassword1">Confirmar contraseña</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Confirmar contraseña"></input>
                </div>
                <div class="form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Estoy de acuerdo con las politicas de la empresa</label>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Crear usuario</button>
            </form>
        </div>
	);
}

export default Newuser;