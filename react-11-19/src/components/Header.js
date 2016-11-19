import React from 'react';

import avater from '../images/avater.jpg';

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      show:false,
      hello: 0
    }
  }
  handleClick(){
    // console.log(this);
    this.setState({
      hello:this.state.hello + 1
    })
  }
  render(){
    console.log(this.state.hello);
    let styles = {
      ul:{
        listStyle:'none',
        padding:'0',
      },
      li:{
        display:'inline-block',
        padding:'10px 20px'
      }
    }
    return (
      <div>
        {this.state.hello}
        <h1 onClick={this.handleClick.bind(this)}>get Bootstrop</h1>
        <ul style={styles.ul} className="menu">
          <li style={styles.li}>{this.state.show}</li>
          <li style={styles.li}>get start</li>
          <li style={styles.li}>CSS</li>
          <li style={styles.li}>Componets</li>
          <li style={styles.li}>{this.state.show ? '我现在是显示' : '我现在是隐藏'}</li>
        </ul>
      </div>
    )
  }
}

export default Header;
