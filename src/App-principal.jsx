import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Estoque from './components/ControleDeEstoque/Estoque';
import Cadastro from './components/CadastroProdutoCliente/CProdutoCliente';
import GestaoUsuario from './components/GestaoDeUsuario/GestaoUsuario';
import RegistroVendas from './components/RegistroDeVendas/RegistroVendas';
import RelatoriosFinanceiros from './components/RelatoriosFinanceiros/RelatoriosFinanceiros';
import './App-principal.css'; // Estilos para layout global

import Header from './components/UIcomponents/Header/Header.jsx';
import Footer from './components/UIcomponents/Footer/footer.jsx';
import Sidebar from './components/UIcomponents/Menu/Sidebar.jsx'; // Importando o Sidebar

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/estoque" element={<Estoque />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/GestaoUsuario" element={<GestaoUsuario />} />
              <Route path="/RegistroVendas" element={<RegistroVendas />} />
              <Route path="/RelatoriosFinanceiros" element={<RelatoriosFinanceiros />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
