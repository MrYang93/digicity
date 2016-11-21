import React from 'react';

class Test extends React.Component{
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  handleClick(n){
    console.log(n);
    this.setState({num:this.state.num + n})
  }
  render(){
    return(
      <div>
        数量：{this.state.num}<br/>
        <button onClick={this.handleClick.bind(this,1)}>加一</button>
        <button onClick={this.handleClick.bind(this,-1)}>减一</button>
      </div>
    )
  }
}

export default Test;
