// src/App-principal.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main'; // Componente Main com o Menu
import Estoque from './components/ControleDeEstoque/Estoque'; // Componente de Estoque
import Cadastro from './components/CadastroProdutoCliente/CProdutoCliente'; // Componente de Cadastro
import GestaoUsuario from './components/GestaoDeUsuario/GestaoUsuario';
import RegistroVendas from './components/RegistroDeVendas/RegistroVendas';
import RelatoriosFinanceiros from './components/RelatoriosFinanceiros/RelatoriosFinanceiros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/GestaoUsuario" element={<GestaoUsuario />} />
        <Route path="/RegistroVendas" element={<RegistroVendas />} />
        <Route path="/RelatoriosFinanceiros" element={<RelatoriosFinanceiros />} />

      </Routes>
    </Router>
  );
}

export default App;
