import React from 'react';

class Header extends React.Component{
  render(){
    let styles = {
      ul:{
        listStyle:'none'
      },
      li:{
        color:'blue',
        display:'inline'
      }
    }
    return (
      <div className='header'>
        <ul style={styles.ul}>
          <li style={styles.li}>菜单</li>
          <li style={styles.li}>导航</li>
          <li style={styles.li}>主页</li>
          <li style={styles.li}>商城</li>
          <li style={styles.li}>哈喽</li>
        </ul>
      </div>
    )
  }
}

export default Header;
