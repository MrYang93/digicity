import React from 'react';

import Card from './component/Card';
import {data} from './data';

class Cards extends React.Component{
  render(){
    let cards = data.map( (item,index) => <Card key={index} title={item.title} index={item.index} date={item.date}/>)
    // console.log(cards);
    return(
      <div>
        {cards}
      </div>
    )
  }
}

export default Cards;
