import React, {Component} from 'react';
import Card from '../Card/Card';

export default class MainContainer extends Component {

  render() {
    const {productData, removeProduct, changeTopStatus} = this.props;

    const outCard = productData.map((item) => {
      return(<Card id={item.id}
        title={item.title} 
        description={item.description}
        price={item.price}
        img={item.img}
        top={item.top}
        removeProduct={() => removeProduct(item.id)} 
        changeTopStatus={() => changeTopStatus(item.id)}
        />)
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