import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                <ul className='menu'>
      <li><a href='/'>Sobre</a></li>
      <li><a href='/'>Produtos</a></li>
      <li><a href='/'>Contatos</a></li>
            </ul>
                </header>
            </div>
        )
    }
}

export default Header