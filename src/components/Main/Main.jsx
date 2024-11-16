// src/components/Main/Main.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usando o Link do react-router-dom
import './Main.css'; // Estilos do Main

const Main = () => {
  return (
    <div className="main-container">
      {/* Menu de Navegação */}
      <nav className="menu-container">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/estoque" className="menu-link">Estoque</Link>
          </li>
          <li className="menu-item">
            <Link to="/cadastro" className="menu-link">Cadastro</Link>
          </li>
          <li className="menu-item">
            <Link to="/GestaoUsuario" className="menu-link">Gestão de Usuarios</Link>
          </li>
          <li className="menu-item">
            <Link to="/RegistroVendas" className="menu-link">Registro de vendas</Link>
          </li>
          <li className="menu-item">
            <Link to="/RelatoriosFinanceiros" className="menu-link">Relatorio Financeiro</Link>
          </li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <div className="content-container">
        <h1>Bem-vindo ao E-Store</h1>
        <p>Gerencie seu estoque e cadastre novos produtos e clientes.</p>
      </div>
    </div>
  );
};

export default Main;
