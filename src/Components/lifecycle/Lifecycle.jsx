import React, { Component } from "react";
import Child from "./Child";

export class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      name: "sarah",
      show:true,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState, this.state.name);
    if (prevState.name !== this.state.name) {
      console.log("updated name");
    } else {
      console.log("same name is printed");
    }
  }
  // updatebtn = () => {
  //   this.setState({ name: "guru" });
  // };
  hidebtn =() =>{
    this.setState({show : !this.state.show})
  }
  shouldComponentUpdate(){
    return true;
  }
  componentWillUnmount(){
    
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Hi {this.state.name}....! Welcome to react Lifecycle</h2>
        <button onClick={()=>{ this.setState({ name: "guru" });}}>update</button>
        <button onClick={this.hidebtn}>show/hide</button>
        {this.state.show ? <Child name={this.state.name}/>: null}
      </div>
    );
  }
}

export default Lifecycle;
