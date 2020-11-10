import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       prodctData: []
    }
  }

  updateProductData = (id, title, description, price, img, top) => {

    let data = {
      id: id,
      title: title,
      description: description,
      price: price,
      img: img,
      top: top
    }

    this.setState(({prodctData}) => {
      const arrProduct = [...prodctData, data]
      return {
        prodctData: arrProduct
      }
    })
  }

  removeProduct = (id) => {
    console.log(id)
    this.setState(({prodctData}) => {
      const findItem = prodctData.findIndex((idItem)=>idItem.id === id)

      const itemsBefore = prodctData.slice(0, findItem);
      const itemsAfter = prodctData.slice(findItem +1);
      const newStateItems = [...itemsBefore, ...itemsAfter];

      return {
        prodctData: newStateItems
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header updateProductData={this.updateProductData}/>
        <MainContainer productData={this.state.prodctData} removeProduct={this.removeProduct}/>
      </div>
    );
  }
}
