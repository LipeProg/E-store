import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import './CProdutoCliente.css'; // Importando a estilização

const CadastroProdutoCliente = () => {
  const navigate = useNavigate(); // Instanciando o hook para navegação
  const [cadastro, setCadastro] = useState({
    nomeProduto: '',
    nomeCliente: '',
    quantidade: '',
    preco: '',
    endereco: '',
  });

  // Função para atualizar o estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadastro({ ...cadastro, [name]: value });
  };

  // Função para salvar o cadastro
  const salvarCadastro = () => {
    // Aqui você pode implementar a lógica para salvar os dados
    console.log(cadastro);
    setCadastro({
      nomeProduto: '',
      nomeCliente: '',
      quantidade: '',
      preco: '',
      endereco: '',
    });
  };

  // Função para cancelar o cadastro
  const cancelarCadastro = () => {
    setCadastro({
      nomeProduto: '',
      nomeCliente: '',
      quantidade: '',
      preco: '',
      endereco: '',
    });
  };

  // Função para voltar à página inicial
  const voltarParaInicio = () => {
    navigate('/'); // Navega para a página principal
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro Produto-Cliente</h2>

      {/* Botão para voltar à página inicial */}
      <button className="btn-voltar" onClick={voltarParaInicio}>
        Voltar para o Início
      </button>

      <div className="form-cadastro">
        <input
          type="text"
          name="nomeProduto"
          placeholder="Nome do Produto"
          value={cadastro.nomeProduto}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nomeCliente"
          placeholder="Nome do Cliente"
          value={cadastro.nomeCliente}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantidade"
          placeholder="Quantidade"
          value={cadastro.quantidade}
          onChange={handleChange}
        />
        <input
          type="number"
          name="preco"
          step="0.01"
          placeholder="Preço"
          value={cadastro.preco}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço do Cliente"
          value={cadastro.endereco}
          onChange={handleChange}
        />
        
        <div className="botoes-cadastro">
          <button onClick={salvarCadastro}>Salvar Cadastro</button>
          <button onClick={cancelarCadastro}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutoCliente;
