import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Hello extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
