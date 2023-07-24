import React from "react";

function Form() {
  return (
    <div id="Form" className="form-section">
      <div className="form-container">
        <h1>Formulario de Contacto</h1>
        <form className="form" action="procesar_formulario.php" method="POST">
          <div className="input-form">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="input-form">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
          </div>
          <div className="input-form">        
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>
          <div className="input-form">
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required />
          </div>
          <div className="input-form">
            <label htmlFor="empresa">Empresa:</label>
            <input type="text" id="empresa" name="empresa" required />
          </div>
          <div className="input-form">
            <label htmlFor="area_interes">Área de Interés:</label>
            <select id="area_interes" name="area_interes" required>
              <option value="">Seleccionar</option>
              <option value="Seguridad">Seguridad</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Mantenimiento">Mantenimiento</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <input className="input-send" type="submit" value="Enviar" />
        </form>
      </div>
      <div className="mapa" >
      <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d466.7626053477363!2d-100.45835364142852!3d20.624746010844166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1690169584231!5m2!1ses!2smx" width="600" height="450" style={{border:0 + 'em'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Form;
