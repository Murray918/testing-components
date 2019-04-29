import React, { Component } from 'react'
import './App.css'
import ListMapper from './ListMapper/ListMapper'
import Card from './Card/Card'

const arrayToMap = [
  {
    name: 'Mandrill',
    alt: '',
    imgUrl: '',
    info:
      'alskdjfiellk jalksdj lsdkdjieosl;akjb skdlpoj fkls;lkdj iidl;akfjgiodlslakjs kdjsl;alkjsd'
  },
  {
    name: 'Standrill',
    alt: '',
    imgUrl: '',
    info:
      'alskdjfiellk jalksdj lsdkdjieosl;akjb skdlpoj fkls;lkdj iidl;akfjgiodlslakjs kdjsl;alkjsd'
  },
  {
    name: 'Crandrill',
    alt: '',
    imgUrl: '',
    info:
      'alskdjfiellk jalksdj lsdkdjieosl;akjb skdlpoj fkls;lkdj iidl;akfjgiodlslakjs kdjsl;alkjsd'
  },
  {
    name: 'Plandrill',
    alt: '',
    imgUrl: '',
    info:
      'alskdjfiellk jalksdj lsdkdjieosl;akjb skdlpoj fkls;lkdj iidl;akfjgiodlslakjs kdjsl;alkjsd'
  }
]

class App extends Component {
  handleClick = event => {
    console.log(event.currentTarget)
  }

  render() {
    return (
      <div className="App">
        <h1>Testing React Components</h1>
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
