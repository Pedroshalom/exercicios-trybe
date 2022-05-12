import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            estadoFavorito:"",
            nome:'',
            email: '',
            idade: 0,
            vaiComparecer: false,
            palavraChaveFavorita:""
        }
    }
    handleChange({target}) {
        const { name} = target
        const value = target.type === 
        'checkbox' ? target.checked: 
        target.value //sintaxe para checkbox
        
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h1 className="h1">Formulário de Inscrição</h1>
                <hr/>
                <form className="form">

                <label>
                    Diga qual é o seu estado favorito:
                      <textarea 
                      name="estadoFavorito" 
                      value={this.state.estadoFavorito} 
                      onChange={this.handleChange} 
                      />
                  </label>

                 <label>
                      Email:
                      <input name="email" type="email" 
                      value={this.state.email} 
                      onChange={this.handleChange} />
                  </label>

                  <label>
                      Nome:
                      <input name="nome" type="text" 
                      value={this.state.nome} 
                      onChange={this.handleChange}/>
                  </label>

                  <label>
                      Idade:
                      <input name="idade" type="number" 
                      value={this.state.idade} 
                    onChange={this.handleChange} />
                  </label>
            
                  <label>
                      Vai comparecer a conferência?
                      <input name="vaiComparecer" type="checkbox" 
                      value={this.vaiComparecer} 
                    onChange={this.handleChange} />
                  </label>

                <label>
                    Escolha sua palavra chave favorita:
                    <select name="palavraChaveFavorita" 
                    value={this.state.palavraChaveFavorita} 
                    onChange={this.handleChange}
                    >
                    <option value="estado">Estado</option>
                    <option value="evento">Evento</option>
                    <option value="props">Props</option>
                    <option value="hooks">Hooks</option>
                    </select>
                </label>
                </form>
            </div>
)
}
    }
export default Form

                   
