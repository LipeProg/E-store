import React from 'react'
import Logo from '../../../assets/IconesMarca/icons8-compras-do-saco-cheio-32.png'
import './Header.css'
function Header() {
  return (
    <div className='app-header'>
    <img src={Logo} alt="Logo" className="app-logo" />
    <h1>E-Store</h1>
    {/* Você pode adicionar navegação ou menus no cabeçalho aqui */}
    </div>
  )
}

export default Header