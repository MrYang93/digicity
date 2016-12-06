import React from 'react';

import Demo from './Demo';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      num:0,
      show:true
    }
    // console.log('initial state');
  }
  componentWillMount(){
    // console.log('will');
  }
  componentDidMount(){
  }
  handleClick(){
    this.setState({num:this.state.num+1})
  }
  componentWillReceiveProps(){console.log('componentWillReceiveProps');}
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){console.log('componentWillUpdate');}
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    // console.log(prevProps, prevState);
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
        {this.state.show ? <Demo ref='aaa' num={this.state.num} /> : null}
        <p>我是一个p标签</p>
      </div>
    )
  }
}

export default App;
