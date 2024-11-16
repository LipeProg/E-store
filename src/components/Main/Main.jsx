import React from 'react';
import { Link } from 'react-router-dom'; 
import './Main.css'; // Estilos para o Main

const Main = () => {
  return (
    <div className="main-container">
      {/* Menu de Navegação */}


      {/* Conteúdo Principal */}
      <div className="content-container">
        <h1>Bem-vindo ao E-Store</h1>
        <p>Gerencie seu estoque e cadastre novos produtos e clientes.</p>
      </div>
    </div>
  );
};

export default Main;
