import React from 'react';

import Demo from './Demo';

class App extends React.Component{
  componentWillMount(){
    console.log('will');
  }
  componentDidMount(){
    console.log('did');
  }
  constructor(){
    super();
    this.state={
      num:0,
      show:true
    }
    console.log('initial state');
  }
  handleClick(){
    this.setState({num:this.state.num+1})
  }
  componentWillReceiveProps(){console.log('componentWillReceiveProps');}
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    console.log(nextProps, nextState);
    if (nextState.num>5) {
      return false;
    }
    return true;
  }
  componentWillUpdate(){console.log('componentWillUpdate');}
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    console.log(prevProps, prevState);
  }
  handleDestroy(){
    this.setState({show:false})
  }
  render(){
    console.log('render');
    return(
      <div>
        你在本页面呆了 {this.state.num} 秒
        <button onClick={this.handleClick.bind(this)}>加一</button>
        <button onClick={this.handleDestroy.bind(this)}>去掉demo组件</button>
        {this.state.show ? <Demo num={this.state.num}/> : null}
      </div>
    )
  }
}

export default App;
