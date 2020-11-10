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

  render() {
    return (
      <div className="App">
        <Header updateProductData={this.updateProductData}/>
        <MainContainer productData={this.state.prodctData} />
      </div>
    );
  }
}
