import React from 'react';
import { Link } from 'react-router';

class MenuBar extends React.Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <button className="btn btn-default">
              <Link to='/' activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>首页</Link>
            </button>
            <button className="btn btn-default">
              <Link to='/work' activeStyle={{color: 'red'}}>work</Link>
            </button>
            <button className="btn btn-default">
              <Link to='/contact' activeStyle={{color: 'red'}}>contact</Link>
            </button>
          </div>
        </nav>
      </div>
    )
  }
}

export default MenuBar;
