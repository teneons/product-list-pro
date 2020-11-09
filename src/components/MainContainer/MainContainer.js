import React, {Component} from 'react';
import Card from '../Card/Card';

export default class MainContainer extends Component {

  render() {
    const arr = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />]

    const outCard = arr.map((item) => {
      return(item)
    })

    return(
      <div className='container-flued d-flex justify-content-center'>
        <div className='d-flex justify-content-around row row-cols-3 col-12 col-sm-10'>
          {outCard}
        </div>
      </div>
    )
  }
}