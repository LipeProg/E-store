import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import './RelatoriosFinanceiros.css'; // Importando a estilização

const RelatoriosFinanceiros = () => {
  const navigate = useNavigate(); // Instanciando o hook para navegação

  // Exemplo de dados financeiros (você pode substituir pelos dados reais)
  const [relatorios, setRelatorios] = useState([
    { id: 1, descricao: 'Venda de Produto A', valor: 100.0, data: '2024-11-01' },
    { id: 2, descricao: 'Venda de Produto B', valor: 150.0, data: '2024-11-02' },
    { id: 3, descricao: 'Venda de Produto C', valor: 200.0, data: '2024-11-03' },
  ]);

  // Função para voltar à página inicial
  const voltarParaInicio = () => {
    navigate('/'); // Navega para a página principal
  };

  return (
    <div className="relatorios-container">
      <h2>Relatórios Financeiros</h2>

      {/* Botão para voltar à página inicial */}
      <button className="btn-voltar" onClick={voltarParaInicio}>
        Voltar para o Início
      </button>

      <div className="relatorios-lista">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor (R$)</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {relatorios.map((relatorio) => (
              <tr key={relatorio.id}>
                <td>{relatorio.descricao}</td>
                <td>{relatorio.valor.toFixed(2)}</td>
                <td>{relatorio.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RelatoriosFinanceiros;
