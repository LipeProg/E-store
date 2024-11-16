// src/components/ControleDeEstoque/Estoque.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando o Link para navegação
import './Estoque.css'; 

const Estoque = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto A', quantidade: 10, preco: 50 },
    { id: 2, nome: 'Produto B', quantidade: 5, preco: 30 },
  ]);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    quantidade: '',
    preco: '',
  });

  const adicionarProduto = () => {
    const produto = {
      ...novoProduto,
      id: produtos.length + 1,
      quantidade: parseInt(novoProduto.quantidade),
      preco: parseFloat(novoProduto.preco),
    };
    setProdutos([...produtos, produto]);
    setNovoProduto({ nome: '', quantidade: '', preco: '' });
  };

  const editarProduto = (id, novaQuantidade) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: produto.quantidade + novaQuantidade }
          : produto
      )
    );
  };

  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  return (
    <div className="estoque-container">
      <h2>Controle de Estoque</h2>

      {/* Link para voltar ao menu */}
      <Link to="/" className="voltar-link">Voltar para o Menu</Link>

      <div className="form-adicionar-produto">
        <input
          type="text"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={novoProduto.quantidade}
          onChange={(e) => setNovoProduto({ ...novoProduto, quantidade: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
        />
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      </div>

      <ul className="lista-produtos">
        {produtos.map((produto) => (
          <li key={produto.id} className="produto-item">
            <span>{produto.nome}</span> - 
            <span>{produto.quantidade} em estoque</span> - 
            <span>R${produto.preco.toFixed(2)}</span>

            <button onClick={() => editarProduto(produto.id, 1)}>Aumentar Estoque</button>
            <button onClick={() => removerProduto(produto.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Estoque;
