import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
// import Contacts from './pages/Contatcts';
import Videos from './pages/Videos';
import './App.css'


function App() {

  return (
    <div>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Sobre</Link></li>
        {/* <li><Link to='/products'>Produtos</Link></li> */}
        {/* <li><Link to='/contacts'>Contatos</Link></li> */}
        <li><Link to='/Videos'>Videos</Link></li>
        
      </ul>
      <div className='button' >
      {/* <button 
          type="button"
          // data-testid="query-button"
          // onClick={ this.onClickButton }
        >
          Adicionar
        </button>  */}
        </div>
        <div  className="carrinho" >
        <a href="o"><img src='carrinho1.png' alt='logo carrinho' /></a>
      </div>
      {/* <input className='button' placeholder='adicionar'
          value=''
          // onChange={ this.onChangeInput }
          // data-testid="query-input"
        />
        <span className='espaço' />
        <button className='button'
          type="button"
          // data-testid="query-button"
          // onClick={ this.onClickButton }
        >
          Pesquisar
        </button> */}
        
      

      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route path="/about" element={<Sobre />} />
        {/* <Route path="contacts" element={<Contacts/>} /> */}
        <Route path="Videos" element={<Videos />} />
      </Routes>
    </div>


  )
}



export default App;
