import React from 'react';

class Demo extends React.Component{
  constructor(){
    super();
    this.state={
      demoNum:5
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps,'ssssss');
    console.log('componentWillReceiveProps==========');
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldComponentUpdate=======');
  //   return true;
  // }
  // componentWillUpdate(){console.log('componentWillUpdate=======');}
  // componentDidUpdate(prevProps, prevState){
  //   console.log('componentDidUpdate=======');
  // }
  componentWillUnmount(){
    console.log('componentWillUnmount465465465456465');
    clearInterval(this.interval)
  }
  componentDidMount(){
    // this.interval = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate(){
    console.log(this.state.demoNum);
  }
  tick() {
    this.setState({demoNum:this.state.demoNum+1})
  }
  render(){
    console.log('render=======');
    return(
      <div>
        我是demo组件
        {this.props.num}<br/>
        我的state{this.state.demoNum}
      </div>
    )
  }
}

export default Demo;
