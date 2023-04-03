import React, { Component } from "react";

export class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      options: "",
    };
  }

   sections={
    // margin:"0 auto",
    border:"1px solid",
    width:"600px",
    padding:"20px"
  }
  box={
    margin:"10px"
  }

  firstname = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };

  lastname = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };

  optionchose = (event) => {
    this.setState({
      options: event.target.value,
    });
  };


  submitfun = (event) => {
    event.preventDefault();

    console.log({
      firstname: this.state.fname,
      lastname: this.state.lname,
      courseselected: this.state.options,
    });
  };
 
  render() {
    const { fname,lname}=this.state
    return (
      <div>
        <h2 >User application form</h2>
        <form onSubmit={this.submitfun} style={this.sections}>
          <label >Firstname</label>
          <input
            type="text"
            style={this.box}
            // placeholder="Firstname"
            value={fname}
            onChange={this.firstname} 
          />
           <label >lastname</label>
          <input
          style={this.box}
            type="text" 
            // placeholder="lastname"
            value={lname}
            onChange={this.lastname}
          />
          <br />
          <label>select the course</label>
          <select value={this.state.options} onChange={this.optionchose}  style={this.box}>
            <option value="React">React</option>
            <option value="javascript">javascript</option>
            <option value="HTML,CSS">HTML,CSS</option>
          </select>
          <br />

          <button type="submit">submit</button>
        </form>
        {/* <h3>list</h3>
      <ol>
        {.map((item, i) => (
          <li key={i}>
            {item.this.firstname} --- {item.this.lastname} -----{item.this.options}
          </li>
        ))}
      </ol> */}
      </div>
    );
  }
}

export default FormClass;
