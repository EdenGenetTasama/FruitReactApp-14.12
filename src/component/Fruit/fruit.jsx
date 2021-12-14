import React from "react";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Apple",
      veg: "",
      text: " ",
      array: [1, 3, 4, 5, 6, 8],
    };
    this.showArrayInfo = this.showArrayInfo.bind(this);
    this.btnFuncFruit = this.btnFuncFruit.bind(this);
    this.funcInputFruit = this.funcInputFruit.bind(this);
  }
  showArrayInfo() {
    for (let i = 0; i < this.state.array.length; i++) {
      <li>this.state.array[i]</li>;
    }
  }

  onClickAction() {
    const arrayToAdd = this.state.array;
    this.setState({ array: arrayToAdd });
  }

  btnFuncFruit() {
    const btn = this.state.veg;
    this.setState({ text: btn });
  }

  funcInputFruit(event) {
    const inp = event.target.value;
    this.setState({ text: inp });
  }

  render() {
    return (
      <div>
        <h2>This is adding Component {this.state.name}</h2>
        {/* <input value={this.state.name}></input> */}
        <input type="text" onChange={this.funcInputFruit}></input>
        <button type="button" onClick={this.btnFuncFruit}>
          PRESS HERE
        </button>
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

export default Fruit;