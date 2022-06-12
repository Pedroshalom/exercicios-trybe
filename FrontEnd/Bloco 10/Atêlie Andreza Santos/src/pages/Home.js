// import Photos from './Photos';


function Home () {
    return(
        <>
        <h2><strong>𝑨𝒏𝒅𝒓𝒆𝒛𝒂 𝑺𝒂𝒏𝒕𝒐𝒔 𝑨𝒕𝒆𝒍𝒊𝒆</strong></h2>
    <h4>Empreendedora</h4>
    <p>❣️Ⓒⓡⓞⓒⓗⓔ Ⓜⓞⓓⓔⓡⓝⓞ❣️</p>
    <h4><strong>𝑯𝒂𝒏𝒅𝒎𝒂𝒅𝒆 by: 𝑨𝒏𝒅𝒓𝒆𝒛𝒂 𝑺𝒂𝒏𝒕𝒐𝒔</strong></h4>
    <h4>📦𝑽𝒆𝒏𝒅𝒂𝒔 𝒐𝒏𝒍𝒊𝒏𝒆;</h4>
    <h4>📲 𝑷𝒂𝒓𝒂 𝒎𝒂𝒊𝒔 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒂𝒄𝒆𝒔𝒔𝒆 𝒐 𝒍𝒊𝒏𝒌 𝒅𝒐 𝒘𝒂𝒕𝒕𝒔 👇</h4>
    <p>contate.me/Artecrochenatal</p>

    <nav className='nav_tabs'>
    <ul className='lista'>
    {/* <li><Link to='/'>Home</Link></li> */}
      <li>
        <input type="radio" name='tabs' className='rd_tabs' id='ponto baixo'/>
        <label for= "ponto baixo">🪡Ponto Baixo</label>
        <div className='content'>
          <article className='texto'>
          <img className='texto' src='pontobaixo.jpg' alt='foto de ponto baixo'/>
          É o ponto mais usado e a base para todos os 
          outros pontos, é um ponto curto e compacto.
          </article>
        </div>
      </li>
      <li>
        <input type="radio" name='tabs' className='rd_tabs' id='boas Vindas' />
        <label for= "boas Vindas">🪡Boas Vindas</label>
        <div className='content'>
          <article className='texto2'>
            Olá, seja bem vindo(a).
            Aqui você encontrará algums produtos feitos com muito carinho. ❣️
          </article>
        </div>
      </li>
      <li>
        <input type="radio" name='tabs' className='rd_tabs' id='Produtos' />
        <label for= "Produtos">🪡Produtos</label>
        <div className='content'>
          <article className='texto3'>
            <img src='bolsa1.jpg' alt='bolsa1'/>
            <img src='bolsa2.jpg' alt='bolsa azul'/>
            <img src='bolsa3.jpg' alt='bolsa rosa'/>
            <img src='bolsa4.jpg' alt='bolsa branca'/>
          </article>
        </div>
      </li>
     </ul>
    </nav>
    <section className='flex'>
     {/* <Photos/> */}
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
      <footer className='footer'>Todos os direitos são reservado a 𝑨𝒏𝒅𝒓𝒆𝒛𝒂 𝑺𝒂𝒏𝒕𝒐𝒔 𝑨𝒕𝒆𝒍𝒊𝒆 </footer>
    </section>
   
    </>
    )
}

export default Home;