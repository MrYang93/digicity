import React from 'react';
import ReactDOM from 'react-dom';

// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';

// class Hello extends React.Component{
//   render(){
//     return (
//       <div>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }
console.log(React);

var ele = React.createElement(
  'div',
  {className: 'sidebar'},
  'hello'
)
ReactDOM.render(
  ele,
  document.getElementById('root')
)
