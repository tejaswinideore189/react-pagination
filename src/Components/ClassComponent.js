import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
        message: 'Welcome to react',
        id : 1
    }
    this.clickHandler = this.clickHandler.bind(this)
}

clickHandler = () => {
    this.setState({
        message:'React is a JavaScript library for building user interfaces.',
        id:this.state.id+1
    })
}
  render() {
    return (
      <div>
        <center>
        <h1>hello react</h1>
        <h4>{this.state.message}</h4>
        <h3>{this.state.id}</h3> 
                <button onClick={this.clickHandler}>
                  Click
                </button>
        
        </center>
      </div>
    )
  }
}
