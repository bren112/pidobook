import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Verifique se o caminho está correto
import './cadastrar.css'; 

function Cadastrar() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from('User')
      .insert([{ nome, telefone, email, senha, avatar }]);

    setLoading(false);

    if (error) {
      setError('Error inserting data');
      console.error('Error inserting data:', error);
    } else {
      setSuccess('Cadastro Criado Com Sucesso');
      setNome('');
      setTelefone('');
      setEmail('');
      setSenha('');
      setAvatar('');
    }
  };

  return (
    <div className="cadastrar-container">
      <h1>Cadastre-se</h1>
      <br></br>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <div className="form-group">
          <label>Escolha seu avatar:</label>
          <div className="avatar-buttons">
            <div className="centro">
            <button
              type="button"
              onClick={() => setAvatar('https://i.pinimg.com/564x/73/7a/3d/737a3dfe3d85df82b1b2660055ff6b64.jpg')}
              className={avatar === 'https://i.pinimg.com/564x/73/7a/3d/737a3dfe3d85df82b1b2660055ff6b64.jpg' ? 'selected' : ''}
            >
              <img src="https://i.pinimg.com/564x/73/7a/3d/737a3dfe3d85df82b1b2660055ff6b64.jpg" alt="Jacaré" width="50" height="50" />
            </button>
            <button
              type="button"
              onClick={() => setAvatar('https://i.pinimg.com/236x/36/ca/d0/36cad0b1a840e127350b07e17b540535.jpg')}
              className={avatar === 'https://i.pinimg.com/236x/36/ca/d0/36cad0b1a840e127350b07e17b540535.jpg' ? 'selected' : ''}
            >
              <img src="https://i.pinimg.com/236x/36/ca/d0/36cad0b1a840e127350b07e17b540535.jpg" alt="Iguana" width="50" height="50" />
            </button>
            <button
              type="button"
              onClick={() => setAvatar('https://i.pinimg.com/564x/b4/a5/b3/b4a5b38398f934c9ce7ddde71d5fb680.jpg')}
              className={avatar === 'https://i.pinimg.com/564x/b4/a5/b3/b4a5b38398f934c9ce7ddde71d5fb680.jpg' ? 'selected' : ''}
            >
              <img src="https://i.pinimg.com/564x/b4/a5/b3/b4a5b38398f934c9ce7ddde71d5fb680.jpg" alt="Cachorro" width="50" height="50" />
            </button>
            <button
              type="button"
              onClick={() => setAvatar('https://i.pinimg.com/564x/1e/7e/5f/1e7e5f5e5e07c07ab3baa24c569215c4.jpg')}
              className={avatar === 'https://i.pinimg.com/564x/1e/7e/5f/1e7e5f5e5e07c07ab3baa24c569215c4.jpg' ? 'selected' : ''}
            >
              <img src="https://i.pinimg.com/564x/1e/7e/5f/1e7e5f5e5e07c07ab3baa24c569215c4.jpg" alt="Rato" width="50" height="50" />
            </button>
          </div>
          </div>
        </div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
       <div className="centro">
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Cadastrar'}
        </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastrar;
