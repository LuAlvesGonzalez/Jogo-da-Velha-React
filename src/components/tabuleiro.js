import React from 'react'
import { Link } from 'react-router-dom'

import { Armazenamento } from './../storage/armazenamento'

import { Caixa } from './caixa-tabuleiro'

import * as utils from '../utils/funcoes'

// Criando tabuleiro 
export class Tabuleiro extends React.Component {
    constructor(props) {
    super(props)

        this.state = {
            caixas: Array(9).fill(null),
            history: [],
            xIsNext: true
        }
    }

    // instância de armazenamento
    armazenamento = new Armazenamento()

    // Clicando nas caixas
    caixaClick(index) {
        // estado atual das caixas
        const caixas = this.state.caixas.slice()

        // Estado atual do histórico
        let history = this.state.history

        // Parando quando há um vencedor
        if (utils.temVencedor(caixas) || caixas[index]) {
            return
        }

        // Parando caso todas as caixas foram preenchidas
        if(utils.todasCaixasMarca(caixas) === true) {
            return
        }

        // Marcando com x ou o
        caixas[index] = this.state.xIsNext ? 'x' : 'o'

        // Salvar no histórico
        history.push(this.state.xIsNext ? 'x' : 'o')

        // Atualizar o estado do componente
    this.setState({
            caixas: caixas,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }

    // Zerando o tabuleiro
    zerandoTabuleiro = () => {
        this.setState({
            caixas: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }

    render() {
        // Registrando vencedor
    const vence = utils.temVencedor(this.state.caixas)

        // Todas as caixas preenchidas?
    const preenchidas = utils.todasCaixasMarca(this.state.caixas)

        // Mensagem de status
    let status

        if (vence) {
            // Se houve vencedor, criar mensagem
            status = `O vencedor é: ${vence}!`

            // Salvando o jogo
            this.armazenamento.update([`${vence} ganhou`])
        } else if(!vence && preenchidas) {
            // Empate, cria mensagem
            status = 'Empatou!'

            // Salvando o jogo 
            this.armazenamento.update(['Deu empate'])
        } else {
            // Não houve vencedor ou empate, continuando o jogo
            status = `É a vez do ${(this.state.xIsNext ? 'x' : 'o')}.`
        }

        return (
            <>
                {/* Link para o placar */}
                <Link to="/" className="tabuleiro-link">Voltar ao placar</Link>

                {/* Tabuleiro do jogo */}
                <div className="tabuleiro-comeco">
                    <div className="tabuleiro">
                        <h2 className="tabuleiro-cabeca">{status}</h2>

                        <div className="tabuleiro-coluna">
                            <Caixa value={this.state.caixas[0]} onClick={() => this.caixaClick(0)} />

                            <Caixa value={this.state.caixas[1]} onClick={() => this.caixaClick(1)} />

                            <Caixa value={this.state.caixas[2]} onClick={() => this.caixaClick(2)} />
                        </div>

                        <div className="tabuleiro-coluna">
                            <Caixa value={this.state.caixas[3]} onClick={() => this.caixaClick(3)} />

                            <Caixa value={this.state.caixas[4]} onClick={() => this.caixaClick(4)} />

                            <Caixa value={this.state.caixas[5]} onClick={() => this.caixaClick(5)} />
                        </div>

                        <div className="tabuleiro-coluna">
                            <Caixa value={this.state.caixas[6]} onClick={() => this.caixaClick(6)} />

                            <Caixa value={this.state.caixas[7]} onClick={() => this.caixaClick(7)} />

                            <Caixa value={this.state.caixas[8]} onClick={() => this.caixaClick(8)} />
                        </div>
                    </div>

                    <div className="tabuleiro-history">
                        <h2 className="tabuleiro-comeco">Histórico dos movimentos:</h2>

                        {/* Lista de movimentos */}
                        <ul className="tabuleiro-history-list">
                            {this.state.history.length === 0 && <span>Sem movimentos.</span>}

                            {this.state.history.length !== 0 && this.state.history.map((move, index) => {
                                return <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
                            })}
                        </ul>
                    </div>

                    {/* Botão pra novo jogo */}
                    {vence && <div className="tabuleiro-fim">
                        <button className="btn" onClick={this.zerandoTabuleiro}>Começar novo jogo</button>
                    </div>}
                </div>
            </>
        )
    }
}