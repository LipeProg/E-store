// src/components/GestaoDeUsuario/GestaoDeUsuario.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import './GestaoUsuario.css';

const GestaoUsuario = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'João Silva', email: 'joao.silva@mail.com' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@mail.com' },
  ]);
  const [novoUsuario, setNovoUsuario] = useState({ nome: '', email: '' });

  // Função para adicionar um novo usuário
  const adicionarUsuario = () => {
    if (novoUsuario.nome && novoUsuario.email) {
      const usuario = {
        ...novoUsuario,
        id: usuarios.length + 1,
      };
      setUsuarios([...usuarios, usuario]);
      setNovoUsuario({ nome: '', email: '' });
    }
  };

  // Função para remover um usuário
  const removerUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <div className="gestao-container">
      <h2>Gestão de Usuários</h2>

      {/* Link para voltar ao menu */}
      <Link to="/" className="voltar-link">Voltar para o Menu</Link>

      <div className="form-adicionar-usuario">
        <input
          type="text"
          placeholder="Nome do usuário"
          value={novoUsuario.nome}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail do usuário"
          value={novoUsuario.email}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
        />
        <button onClick={adicionarUsuario}>Adicionar Usuário</button>
      </div>

      <ul className="lista-usuarios">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="usuario-item">
            <span>{usuario.nome} - {usuario.email}</span>
            <button onClick={() => removerUsuario(usuario.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestaoUsuario;
