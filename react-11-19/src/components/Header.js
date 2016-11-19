import React from 'react';

import avater from '../images/avater.jpg';

class Header extends React.Component{
  render(){
    let styles = {
      ul:{
        listStyle:'none',
        padding:'0'
      },
      li:{
        display:'inline-block',
        padding:'10px 20px'
      }
    }
    return (
      <div>
        <h1>get Bootstrop</h1>
        <ul style={styles.ul} className="menu">
          <li style={styles.li}>Bootstrop</li>
          <li style={styles.li}>get start</li>
          <li style={styles.li}>CSS</li>
          <li style={styles.li}>Componets</li>
          <li style={styles.li}>Javascript</li>
        </ul>
        <img src={avater} alt='avater'/>
      </div>
    )
  }
}

export default Header;
