import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail (value) {
    this.setState({email:value});
  }

  changeSaveEmail (value) {
    this.setState({saveEmail: value, email:''});
  }

  render() {
    const {email, saveEmail} = this.State;
  
  return (
    <div>
      <label htmlFor='id-email'>
      email
      <imput
      id= 'id-email'
      value= {email}
      type='email'
      onchenge= {(e) => this.changeEmail(e.target.value)}
      />
      </label>
      <imput 
      id='btn-enviar'
      type='button'
      data-testid= 'id-send'
      value='envar'
      onclick= { () => this.changeSaveEmail(email)}
      />
      <imput id='btn-id' type='button' value='voltar'/>
      <h2 data-testid= 'id-email-user'>{`valor:${saveEmail}`}</h2>
    </div>
  );
}
}


export default App;
