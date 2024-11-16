// src/components/RegistroDeVendas/RegistroDeVendas.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroVendas.css';

const RegistroDeVendas = () => {
  const navigate = useNavigate();
  const [vendas, setVendas] = useState([]);
  const [novaVenda, setNovaVenda] = useState({
    nomeProduto: '',
    quantidade: '',
    preco: '',
  });

  // Função para adicionar venda
  const registrarVenda = () => {
    const venda = {
      ...novaVenda,
      id: vendas.length + 1,
      quantidade: parseInt(novaVenda.quantidade),
      preco: parseFloat(novaVenda.preco),
      total: parseInt(novaVenda.quantidade) * parseFloat(novaVenda.preco),
    };
    setVendas([...vendas, venda]);
    setNovaVenda({ nomeProduto: '', quantidade: '', preco: '' });
  };

  // Função para voltar para a página principal
  const voltarParaPrincipal = () => {
    navigate('/');
  };

  return (
    <div className="registro-vendas-container">
      <h2>Registro de Vendas</h2>

      {/* Botão para voltar para a página principal */}
      <button className="btn-voltar" onClick={voltarParaPrincipal}>
        Voltar para o Principal
      </button>

      {/* Formulário de Registro de Venda */}
      <div className="form-registrar-venda">
        <input
          type="text"
          placeholder="Nome do Produto"
          value={novaVenda.nomeProduto}
          onChange={(e) => setNovaVenda({ ...novaVenda, nomeProduto: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={novaVenda.quantidade}
          onChange={(e) => setNovaVenda({ ...novaVenda, quantidade: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Preço"
          value={novaVenda.preco}
          onChange={(e) => setNovaVenda({ ...novaVenda, preco: e.target.value })}
        />
        <button onClick={registrarVenda}>Registrar Venda</button>
      </div>

      {/* Lista de Vendas */}
      <ul className="lista-vendas">
        {vendas.map((venda) => (
          <li key={venda.id} className="venda-item">
            <span>{venda.nomeProduto}</span> - 
            <span>{venda.quantidade} unidades</span> - 
            <span>R${venda.preco.toFixed(2)}</span> - 
            <span>Total: R${venda.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistroDeVendas;
