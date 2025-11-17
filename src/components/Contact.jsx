import React, { useState } from "react";
import Placeholder from "../assets/images/Placeholder.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes conectar con tu backend o servicio de email
    alert("Gracias! Formulario enviado.");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__intro">
          <h2 className="contact__intro-title"> 
            CONTACTE / FEM FIL ?
          </h2>
          <p className="contact__intro-info">
            Cada punt comença amb un gest i cada col·laboració amb una conversa. 
            Si tens una idea, un projecte o simplement vols saber més sobre la nostra associació, escriu-nos. 
            Ens agrada fer les coses a poc a poc, amb cura i amb les mans.
          </p>
        </div>

        <div className="contact__form">
          <p className="contact__form-text">
            Contacta amb l’Associació de Cossidores de Salt per col·laboracions, tallers o informació.
          </p>

          <form onSubmit={handleSubmit} className="form__contact">
            <input
              className="input__contact"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nom i cognoms"
              required
            />

            <input
              className="input__contact"
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Correu electrònic exemple@correu.com"
              required
            />

            <textarea
              className="input__contact"
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escriu el teu missatge aquí..."
              rows="5"
              required
            />

            <button type="submit" className="btn__submit">
              Enviar
            </button>
          </form>
          <div className="contact__address">
            <div className="contact__address-info"> 
              <h3 className="contact__address-info-title">ENS TROBARÀS A:</h3>
              <p className="contact__address-info-text"> ASSOCIACIÓ DE COSIDORES DE SALT C/ San Antoni 117190 Salt (Girona)</p>
            </div>
            <div className="contact__address-image">
              <img src={Placeholder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}