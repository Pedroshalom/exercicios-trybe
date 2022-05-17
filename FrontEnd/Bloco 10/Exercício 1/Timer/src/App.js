import React from 'react';
import './App.css';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';

// adicionar botão para esconder e mostrar o Timer 😉
// fazer o timer rodar sozinho 🤩
// fazer o timer rodar até o número 5, e depois voltar para 1 ✅
// fazer as "fases" do meu timer (inspira, segura, expira) ✅
// Bônus - colocar um "sonzinho" a cada segundo

class App extends React.Component {
  state = {
    showTimer: true,
  };

  toggleTimer = () => {
    this.setState(({ showTimer }) => ({ showTimer: !showTimer }));
  };

  // timerElement() {
  //   const { showTimer } = this.state;
  //   if (showTimer) {
  //     return <Timer />;
  //   }
  // }

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        {/* {this.timerElement()} */}
        {/* {showTimer === true ? <Timer /> : null} */}
        {showTimer === true && <Timer />}
        <button type="button" onClick={ this.toggleTimer }>
          {showTimer ? 'Esconder Timer' : 'Mostrar Timer'}
        </button>
      </div>
    );
  }
}

export default App;