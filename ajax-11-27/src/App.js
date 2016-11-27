import React from 'react';
import axios from 'axios';

import GitShow from './GitShow';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let value = this.refs.input.value;
    axios.get(`https://api.github.com/users/${value}`)
      .then( response => this.setState({data:response.data,wait:false}) )
      .catch( error => alert(error) )
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='search git' ref='input'/>
        </form>
        {this.state.wait?'loading....':<GitShow gitinfo={this.state.data}/>}
      </div>
    )
  }
}

export default App;
