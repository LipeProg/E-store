import React from 'react';
import { Link } from 'react-router-dom'; // Usando o Link do react-router-dom
import './Sidebar.css'; // Estilos do Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/estoque">Estoque</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/GestaoUsuario">Gestão de Usuários</Link></li>
        <li><Link to="/RegistroVendas">Registro de Vendas</Link></li>
        <li><Link to="/RelatoriosFinanceiros">Relatório Financeiro</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
