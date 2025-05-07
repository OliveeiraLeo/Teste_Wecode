import React, { useState, useEffect } from 'react';
import '../styles/CepModal.scss';

function CepModal() {
  const [editando, setEditando] = useState(false);
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [localizacao, setLocalizacao] = useState('Caxias do Sul');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedCep    = localStorage.getItem('cep');
    const savedEstado = localStorage.getItem('estado');
    const savedCidade = localStorage.getItem('cidade');

    if (savedCep && savedEstado && savedCidade) {
      setCep(savedCep);
      setEstado(savedEstado);
      setCidade(savedCidade);
      setLocalizacao(savedCidade);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        setEditando(false);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const salvarEndereco = () => {
    localStorage.setItem('cep', cep);
    localStorage.setItem('estado', estado);
    localStorage.setItem('cidade', cidade);

    setLocalizacao(cidade);
    setEditando(false);
  };

  if (scrolled) return null;

  return (
    <>
      <div className="cep-bar">
        <span>Você está em: {localizacao}</span>
        <button onClick={() => setEditando(o => !o)}>
          Alterar
        </button>
      </div>

      {editando && (
        <div className="cep-box">
          <h2 className="cep-box-title">
            Personalize sua experiência e encontre produtos próximos de você!
          </h2>

          <div className="cep-field">
            <label htmlFor="cep">Código Postal*</label>
            <input
              id="cep"
              type="text"
              placeholder="00000-00"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </div>

          <div className="cep-row">
            <div className="cep-field">
              <label htmlFor="estado">Estado</label>
              <select
                id="estado"
                value={estado}
                onChange={e => setEstado(e.target.value)}
              >
                <option value="">Opcional</option>
                <option value="RS">RS</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="SC">SC</option>
              </select>
            </div>
            <div className="cep-field">
              <label htmlFor="cidade">Cidade</label>
              <select
                id="cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)}
              >
                <option value="">Opcional</option>
                <option value="Caxias do Sul">Caxias do Sul</option>
                <option value="Florianópolis">Florianópolis</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="São Paulo">São Paulo</option>
              </select>
            </div>
          </div>

          <button className="cep-save" onClick={salvarEndereco}>
            Salvar Endereço
          </button>
        </div>
      )}
    </>
  );
}

export default CepModal;
