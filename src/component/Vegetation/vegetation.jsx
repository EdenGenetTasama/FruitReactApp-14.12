import React from "react";

class VegetationAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tomato",
      veg: "",
      text: " ",
      array: [1, 3, 4, 5, 6, 8],
    };
    this.showArrayInfo = this.showArrayInfo.bind(this);
    this.btnFunc = this.btnFunc.bind(this);
    this.funcInput = this.funcInput.bind(this);
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

  btnFunc() {
    const btn = this.state.veg;
    this.setState({text: btn });
  }

  funcInput(event) {
    const inp = event.target.value;
    this.setState({ text: inp });
  }

  render() {
    return (
      <div>
        <h2>This is adding Component {this.state.name}</h2>
        {/* <input value={this.state.name}></input> */}
        <input type="text" onChange={this.funcInput}></input>
        <button type="button" onClick={this.btnFunc}>
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

export default VegetationAdd;
