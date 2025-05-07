import React, { useState } from 'react';
import '../styles/NewsLetter.scss';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const coupon = 'OFF10BLOG';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon);
    alert('Cupom copiado: ' + coupon);
  };

  return (
    <section className="newsletter-section">
      {!submitted ? (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <h2 className='cadastro-desc'>Cadastre seu email e ganhe 10% OFF na sua primeira compra!</h2>
          <div className="input-group">
            <input
              type="email"
              placeholder="Digite Seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Enviar</button>
          </div>
        </form>
      ) : (
        <div className="newsletter-success">
          <p className='cupom-desc'>Utilize o cupom ao lado e garanta seu desconto!</p>
          <div className="coupon-group">
            <span className="coupon-code">{coupon}</span>
            <button className='copy-button'onClick={handleCopy}>Copiar</button>
          </div>
        </div>
      )}
    </section>
  );
}