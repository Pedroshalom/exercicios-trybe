// import Photos from './Photos';


function Home() {
  return (
    <>
      <section className="section">
        <h2><strong>π¨ππππππ πΊπππππ π¨πππππ</strong></h2>
        <h4>Empreendedora</h4>
        <p>β£οΈβΈβ‘ββββ βββββ‘βββ£οΈ</p>
        <h4><strong>π―πππππππ by: π¨ππππππ πΊπππππ</strong></h4>
        {/* <h4>π¦π½πππππ ππππππ;</h4> */}
        {/* <h4> π·πππ ππππ πππππππππππ ππππππ π ππππ ππ πππππ π</h4> */}
        {/* <a href="https://wa.me/5584999096035"><strong>π² Quero fazer meu pedido</strong></a> */}
      </section>
      <nav className='nav_tabs'>
        <ul className='lista'>
          {/* <li><Link to='/'>Home</Link></li> */}
          <li>
            <input type="radio" name='tabs' className='rd_tabs' id='ponto baixo' />
            <label for="ponto baixo">πͺ‘Ponto Baixo</label>
            <div className='content'>
              <article className='texto'>
                <img className='texto' src='pontobaixo.jpg' alt='foto de ponto baixo' />
                Γ o ponto mais usado e a base para todos os
                outros pontos, Γ© um ponto curto e compacto.
              </article>
            </div>
          </li>
          <li>
            <input type="radio" name='tabs' className='rd_tabs' id='boas Vindas' />
            <label for="boas Vindas">πͺ‘Boas Vindas</label>
            <div className='content'>
              <article className='texto2'>
                OlΓ‘, seja bem vindo(a).
                Aqui vocΓͺ encontrarΓ‘ algums produtos feitos com muito carinho. β£οΈ
              </article>
            </div>
          </li>
          <li>
            <input type="radio" name='tabs' className='rd_tabs' id='Produtos' />
            <label for="Produtos">πͺ‘Produtos</label>
            <div className='content'>

              < div className='texto3'>
                <img src='bolsa1.jpg' alt='bolsa1' />
                <img src='bolsa2.jpg' alt='bolsa azul' />
                <img src='bolsa3.jpg' alt='bolsa rosa' />
                <img src='bolsa4.jpg' alt='bolsa branca' />
                <img src='kitcestos1.jpg' alt='kit cestos' />
                <img src='kitcestos2.jpg' alt='kit cestos' />
                <img src='bolsacharme.jpg' alt='bolsa charme' />
                <img src='bolsaduplas.jpg' alt='bolsa duplas' />
                <img src='bolsafelicidade.jpg' alt='bolsa felicidade' />
                <img className="bolsapaz" src='bolsapaz.jpg' alt='bolsa paz' />
                <img src='bolsarequinte.jpg' alt='bolsa requinte' />
                <img src='bolsarosachock.jpg' alt='bolsa rosa chock' />

              </div>
            </div>
          </li>
        </ul>
      </nav>
      <section className='flex'>
        {/* <Photos/> */}
      </section>
      <footer className="rodape">
        {/* Nossas redes socias: */}
        {/* <p>Β© Todos os direitos reservados a&emsp;πͺ‘π¨ππππππ πΊπππππ π¨ππππππͺ‘</p> */}
        <p>Nossas Redes Socias</p> <a href="https://instagram.com/andrezanayaraa?igshid=YmMyMTA2M2Y="><img className="rede-social" src='gran.png' alt='logo instagran' /></a>
        <a href="https://wa.me/5584999096035"><img className="rede-social" src='whatts.png' alt='logo whatsapp' /></a>
        <a href="https://outlook.live.com/mail/0/"><img className="rede-social" src='email.png' alt='logo email' /></a>
      </footer>
    </>
  )
}

export default Home;