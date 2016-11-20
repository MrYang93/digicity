import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  handleClick(){
    this.setState({show:!this.state.show})
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>click</button>
        <div className='cover'
          onClick={this.handleClick.bind(this)}
          style={{display:this.state.show ? 'block' : 'none'}}>
        </div>
        <div className='menu' style={{left:this.state.show ? '0' : '-200px'}}>
          <h3>Title</h3>
          <p>home</p>
          <p>sign in</p>
          <p>sign up</p>
        </div>
      </div>
    )
  }
}

export default App;
