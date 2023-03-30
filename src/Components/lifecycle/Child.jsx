import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
      super(props)
    console.log("child constructor")
      this.state = {
         age:"25",
       
      }
    }
    componentDidMount(){
        console.log("child componentDidMount")
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }
    shouldComponentUpdate(nextProps,nextState){
    //     console.log("nextState",nextState,this.state)
    //     if(this.state.age!==nextState.age) return true;
    //    else return false;
    console.log("nextProps",nextProps,this.props)
    if(this.props.name!==nextProps.name) return true;
   else return false;

    }
    componentWillUnmount(){
      console.log("child componentWillUnmount")
    }
    childbtn=()=>{
        this.setState({age:"10"})
        
    }
  render() {
    console.log("child render")
    return (
      <div>
       <h2> Hi {this.props.name} i am {this.state.age} years old</h2>
       <button onClick={this.childbtn}>child update</button>
      </div>
    )
  }
}

export default Child
