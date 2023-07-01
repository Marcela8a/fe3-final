import React from "react"
import Form from '../Components/Form'

const Contact = () => {
    return (
      <div className="contact-container">
      <h1>¿Quieres saber más?</h1>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>

        <div className="form-container">
          <Form />
        </div>

        <style>{`.form-container {
          margin-top: 80px; }`}
        </style>
      </div>
  )
};

export default Contact;