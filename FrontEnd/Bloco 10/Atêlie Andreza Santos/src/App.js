// import logo from './logo.svg';
// import './App.css';
// import Header from '.data'


// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;


// import logo from './assets/logo.png';
import bolsa1 from './assets/bolsa1.jpg';
import bolsa2 from './assets/bolsa2.jpg';
import bolsa3 from './assets/bolsa3.jpg';
import bolsa4 from './assets/bolsa4.jpg';
import foto from './assets/foto.jpg';
import foto1 from './assets/foto1.jpg';
import React from 'react';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
       <ul className='menu'>
      <li><a href='/'>Sobre</a></li>
      <li><a href='/'>Produtos</a></li>
      <li><a href='/'>Contatos</a></li>
      </ul>
       <h2> <strong>𝑨𝒏𝒅𝒓𝒆𝒛𝒂 𝑺𝒂𝒏𝒕𝒐𝒔 𝑨𝒕𝒆𝒍𝒊𝒆</strong></h2>
    <h4>Empreendedor(a)</h4>
    <p>❣Ⓒⓡⓞⓒⓗⓔ Ⓜⓞⓓⓔⓡⓝⓞ❣</p>
    <h4><strong>𝑯𝒂𝒏𝒅𝒎𝒂𝒅𝒆 𝒑𝒐𝒓: 𝑨𝒏𝒅𝒓𝒆𝒛𝒂 𝑺𝒂𝒏𝒕𝒐𝒔</strong></h4>
    <h4>📦𝑽𝒆𝒏𝒅𝒂𝒔 𝒐𝒏𝒍𝒊𝒏𝒆;</h4>
    <h4>📲 𝑷𝒂𝒓𝒂 𝒎𝒂𝒊𝒔 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒂𝒄𝒆𝒔𝒔𝒆 𝒐 𝒍𝒊𝒏𝒌 𝒅𝒐 𝒘𝒂𝒕𝒕𝒔 👇</h4>

    <h1>
    <ol className='lista'>
      <li><a href='/'>Clientes ❣️</a></li>
      <li><a href='/'>Ponto Baixo ❣️ </a></li>
      <li><a href='/'>Boas Vindas ❣️</a></li>
      </ol>
    </h1>
    <section className='flex'>
      <div>
      <img src={bolsa1} alt='bolsa1' />
      <img src={foto} alt='foto' />
      <img src={bolsa2} alt='bolsa2' />
      <img src={bolsa3} alt='bolsa3' />
      <img src={bolsa4} alt='bolsa4' />
      <img src={foto1} alt='foto1' />
      </div>
      
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    </div>
    
    
    )
  }

}

export default App;
