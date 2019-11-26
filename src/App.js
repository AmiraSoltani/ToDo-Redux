import React, { Component } from 'react'
import TodoItems from './TodoItems'
import AddItem from './AddItem'
import './App.css';


export default class App extends Component {


  render() {

    return (
      <div>
        <AddItem />
        <TodoItems />

      </div>
    )
  }
}
