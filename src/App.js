import React, { Component } from 'react'
import './App.css'
import ListMapper from './ListMapper/ListMapper'
import Card from './Card/Card'

class App extends Component {
  handleClick = event => {
    console.dir(event.currentTarget.parentElement.children[0].innerHTML)
  }

  render() {
    return (
      <div className="App">
        <h1>Testing React Co console.log(int)mponents</h1>
        {/* this is the ListMapper it creates a <ul> with an array and any component that is passes to it */}
        <ListMapper array={arrayToMap} component={Card}>
          <button type="submit" onClick={this.handleClick}>
            Click
          </button>
        </ListMapper>
      </div>
    )
  }
}

export default App
