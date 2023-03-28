import React, { Component } from "react";

export class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      names: "saranya",
    };
    
    // this.updates=() =>{
    //   this.setState({ names: "guru" });
    // }
  }
  updates=() =>{
    this.setState({ names: "guru" });
  }

  render() {
    return (
      <div>
        <h2>state class example</h2>
        <h4>Hi this is {this.state.names} </h4>
        <button onClick={this.updates}>Update</button>
      </div>
    );
  }
}

export default ClassState;
