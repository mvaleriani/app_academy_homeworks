import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {num1: '', num2: '', result: 0}
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  render(){
    const {num1, num2, result} = this.state;
    return (
      <div>
        <h1>Calculate Things</h1>
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>

        <button onClick={this.clear} value=''>CLEAR</button>
        <button onClick={this.add} value=''>+</button>
        <button onClick={this.subtract} value=''>-</button>
        <button onClick={this.multiply} value=''>*</button>
        <button onClick={this.divide} value=''>/</button>

        <h4>{this.state.result}</h4>
      </div>
    );
  }

  clear(e){
    this.setState({num1: '', num2: '', result: 0})
  }

  add(e){
    const result = this.state.num1 + this.state.num2
    this.setState({result})
  }

  subtract(e){
    const result = this.state.num1 - this.state.num2
    this.setState({result})
  }

  multiply(e){
    const result = this.state.num1 * this.state.num2
    this.setState({result})
  }

  divide(e){
    const result = this.state.num1 / this.state.num2
    this.setState({result})
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2});
  }
}

export default Calculator;
