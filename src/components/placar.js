import React from 'react'
import { Link } from 'react-router-dom'

import { Armazenamento } from './../storage/armazenamento'

// Criando placar
export class Placar extends React.Component {
  state = {
    placar: []
  }

  async componentDidMount() {
    let armazenamento = await new Armazenamento().getData()

    this.setState({
      placar: armazenamento
    })
  }

  render() {
    return (
      <div className="game">
        <h1>Jogos mais recentes:</h1>

                {/* Lista os jogos anteriores */}
        <ul>
          {this.state.placar.map((lider, key) => {
            return <li key={key}>{lider}</li>
          })}
        </ul>

                {/* Começar novo jogo */}
        <Link to="/tabuleiro">
          <button className="btn">Começar novo jogo</button>
        </Link>
      </div>
    )
  }
}