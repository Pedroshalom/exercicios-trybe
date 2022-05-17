import React from 'react';
import sound from '../assets/bip.mp3';

const ONE_SECOND = 1000;
const TIME_LIMIT = 6;

class Timer extends React.Component {
  constructor() {
    super();
    console.log('constructor');
  }

  state = {
    seconds: 0,
    phases: ['🫁 Inspire...', '🤐 Segure...', '😮‍💨 Expire...'],
    phasesIndex: 0,
  };

  componentDidMount() {
    const audio = new Audio(sound);
    console.log('did mount');
    this.intervalId = setInterval(() => {
      audio.play();
      console.log('setando o state dentro do setInterval');
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate() {
    const { seconds } = this.state;
    console.log('did update');
    if (seconds === TIME_LIMIT) {
      this.setState((prevState) => ({
        seconds: 0,
        phasesIndex: prevState.phasesIndex < 2 ? prevState.phasesIndex + 1 : 0,
      }));
    }
  }

  componentWillUnmount() {
    console.log('will unmount');
    clearInterval(this.intervalId);
  }

  render() {
    console.log('render');
    const { seconds, phases, phasesIndex } = this.state;
    return (
      <section>
        <h1>{phases[phasesIndex]}</h1>
        <h2>{seconds}</h2>
      </section>
    );
  }
}

export default Timer;