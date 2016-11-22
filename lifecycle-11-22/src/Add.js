import React from 'react';

class Add extends React.Component{
  constructor(){
    super();
    this.state={num:0}
  }
  handleClick(){
    console.log('666');
    this.setState({num:this.state.num+1})
  }
  render(){
    return(
      <div>
        {this.state.num}
        <button onClick={this.handleClick.bind(this)}>加一</button>
      </div>
    )
  }
}

export default Add;
