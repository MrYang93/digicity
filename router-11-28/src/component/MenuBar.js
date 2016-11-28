import React from 'react';
import { Link } from 'react-router';

class MenuBar extends React.Component{
  render(){
    return(
      <ul className="nav nav-tabs">
        <li role="presentation">
          <Link to='/' activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>首页</Link>
        </li>
        <li role="presentation">
          <Link to='/work' activeStyle={{color: 'red'}}>work</Link>
        </li>
        <li role="presentation">
          <Link to='/contact' activeStyle={{color: 'red'}}>contact</Link>
        </li>
      </ul>
    )
  }
}

export default MenuBar;
