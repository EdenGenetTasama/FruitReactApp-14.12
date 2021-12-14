import React, { Component }  from "react";

class VegetationAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"TOMATO",
      text: "",
      veg: "onion",
      array: [],
    };
    this.funcInputF = this.funcInputF.bind(this);
    this.btnFunF = this.btnFunF.bind(this);
  }

  funcInputF(event) {

    const inp = event.target.value;
    this.setState({ text: inp })
}

btnFunF() {
    const btn = this.state.canned;
    this.setState({array: btn})
}

  render() {
    return (
      <div>
        <h2>This is adding Component {this.state.name}</h2>
  
        <input onChange={this.funcInput}></input>
        <button onClick={this.btnFunc}>press</button>
        <p>Lorem, ipsum. Sunt, corporis? Totam, nihil.</p>
        {/* <p>{this.showArrayInfo()}</p> */}
        {/* {this.state.array.forEach(element => {
        <li></li>
        })} */}

        {/* <li>{this.state.array[0]}</li>
        <li>{this.state.array[1]}</li>
        <li>{this.state.array[2]}</li>
        <li>{this.state.array[3]}</li>
        <li>{this.state.array[4]}</li> */}
      </div>
    );
  }
}

export default VegetationAdd;
