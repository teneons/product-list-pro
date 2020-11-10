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
  
  objProduct = (title, description, price, img, top) => {
    return {
      id: 1,
      title,
      description,
      price,
      img,
      top
    }
  }

  updateProductData = (data) => {

    const itemProduct = this.objProduct(data);

    this.setState(({prodctData}) => {
      const arrProduct = [...prodctData, itemProduct]
      return {
        prodctData: arrProduct
      }
    })
  }

  render() {
    console.log(this.state.prodctData)
    return (
      <div className="App">
        <Header updateProductData={this.updateProductData}/>
        <MainContainer productData={this.state.prodctData} />
      </div>
    );
  }
}
