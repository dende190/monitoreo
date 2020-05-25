import React from 'react';

const Newuser = () => {
	return (
		<div>
            <form>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Nombre</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Apellido</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Apellido"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo electronico</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar correo"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Telefono</label>
                            <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="phoneHelp" placeholder="Ingresar telefono"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label for="exampleDropdownFormPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label for="exampleDropdownFormPassword1">Confirmar contraseña</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Confirmar contraseña"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <label for="exampleInputEmail1">Seleccione empresa</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>ERC</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <p>Permisos</p>
                        <label className="mr-1" for="checkboxAdmin">Administrar</label>
                        <input className="mr-3" type="checkbox" value="leer" name="checkboxAdmin" />
                        <label className="mr-1" for="checkboxCreated">Crear</label>
                        <input className="mr-3" type="checkbox" value="leer" name="checkboxCreated" />
                        <label className="mr-1" for="checkboxReport">Reportar</label>
                        <input className="mr-3" type="checkbox" value="leer" name="checkboxReport" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Crear usuario</button>
            </form>
        </div>
	);
}

export default Newuser;