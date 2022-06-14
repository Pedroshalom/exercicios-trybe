import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contacts from './pages/Contatcts';
import Videos from './pages/Videos';
import './App.css'


function App () {
  
    return (
      <div>
       <ul className='menu'>
       <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Sobre</Link></li>
        {/* <li><Link to='/products'>Produtos</Link></li> */}
        <li><Link to='/contacts'>Contatos</Link></li>
        <li><Link to='/Videos'>Videos</Link></li>
       </ul>
       
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route path="/about" element={<Sobre/>} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="Videos" element={<Videos/>} />
      </Routes>
     </div>
    
    
    )
  }



export default App;
