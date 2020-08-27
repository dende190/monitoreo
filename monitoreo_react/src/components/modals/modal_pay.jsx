import React from 'react';
import { useState } from 'react';
import '../../assets/css/modals/style.css';

const ModalPay = () => {
  const [hiden, setHiden] = useState(false);

  const handleClickCloseModal = () => {
    setHiden(true);
  }
  return (
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
  ) 
};

export default ModalPay;
