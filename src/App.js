import React, { Component } from 'react'
import './App.css'
import ListMapper from './ListMapper/ListMapper'
import Card from './Card/Card'
import arrayToMap from './Utils/TestArray'

class App extends Component {
  handleClick = event => {
    console.dir(event.currentTarget.parentElement.children[0].innerHTML)
  }

  render() {
    return (
      <main className="App">
        <h1>Testing React Components</h1>
        <ListMapper array={arrayToMap} component={Card}>
          <button type="submit" onClick={this.handleClick}>
            Click
          </button>
        </ListMapper>
      </main>
    )
  }
}

export default App
