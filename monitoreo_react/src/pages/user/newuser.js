import React, { useState } from 'react';
import '../../assets/css/modals/style.css';

const Newuser = () => {
  const [form, setForm] = useState({});
  const [hiden, setHiden] = useState(false);
  const handeInput = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handeSubmit = event => {
    event.preventDefault();
    setHiden(true)
  }

  const handleClickCloseModal = () => {
    setHiden(false)
  }

  return (
    <div>
      <form onSubmit={ handeSubmit }>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="nameHelp"
                placeholder="Nombre"
                name="name"
                onChange={ handeInput }
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Apellido</label>
              <input 
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="nameHelp"
                placeholder="Apellido"
                name="lastName"
                onChange={ handeInput }
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Correo electronico</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingresar correo"
                name="email"
                onChange={ handeInput }
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingresar nombre de usuario"
                name="username"
                onChange={ handeInput }
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Telefono</label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="phoneHelp"
                placeholder="Ingresar telefono"
                name="phone"
                onChange={ handeInput }
              />
            </div>
          </div>
          <div className="col-6">
            <label>Seleccione empresa</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="company"
              onChange={ handeInput }
            >
              <option values="1">ERC</option>
            </select>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Contraseña"
                name="password"
                onChange={ handeInput }
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Confirmar contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Confirmar contraseña"
                name="passwordValidate"
                onChange={ handeInput }
              />
            </div>
          </div>
         </div>
        <button type="submit" className="btn btn-primary mt-3">Crear usuario</button>
      </form>
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

export default Newuser;