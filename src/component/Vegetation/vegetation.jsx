import React, { Component } from "react";

class Vegetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vegName: "", vegArray: [] };
    this.changeInput = this.changeInput.bind(this);
    this.clickEven = this.clickEven.bind(this);
  }

  changeInput(event) {
    this.state.vegName = event.target.value;
  }

  clickEven() {
    this.state.vegArray.push(this.state.vegName);
    this.setState({vegName : this.state.vegName})
  }

  render() {
    return (
      <div>
        <h1>This is component {this.state.vegName}</h1>
        <input onChange={this.changeInput}></input>
        <button onClick={this.clickEven}>Add</button>
        <ul>
          {this.state.vegArray.map((veg) => {
            <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Vegetable;
