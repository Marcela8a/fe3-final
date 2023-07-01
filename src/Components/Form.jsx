import React, { useState } from "react";
import '../index.css'; 

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (fullName.length < 5 || !emailIsValid(email)) {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage(`Gracias ${fullName}, te contactaremos pronto vía email`);
      console.log('Datos enviados:', { fullName, email });
    }
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="form-button">Enviar</button>
      </form>
    <div className="message-container">
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
      <style>{`
        .message-container {
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
};

export default Form;