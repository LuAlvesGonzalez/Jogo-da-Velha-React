import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Tabuleiro } from './components/tabuleiro'
import { Placar } from './components/placar'

import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Placar}/>
          <Route path="/tabuleiro" component={Tabuleiro}/>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))