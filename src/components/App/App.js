import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import {connect} from 'react-redux';

class App extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      prodctData: []
  //   }
  // }


  // updateProductData = (id, title, description, price, img, top) => {

  //   let data = {
  //     id: id,
  //     title: title,
  //     description: description,
  //     price: price,
  //     img: img,
  //     top: top
  //   }

  //   this.setState(({prodctData}) => {
  //     const arrProduct = [...prodctData, data]
  //     return {
  //       prodctData: arrProduct
  //     }
  //   })
  // }

  // removeProduct = (id) => {
  //   this.setState(({prodctData}) => {
  //     const findItem = prodctData.findIndex((idItem)=>idItem.id === id)

  //     const itemsBefore = prodctData.slice(0, findItem);
  //     const itemsAfter = prodctData.slice(findItem +1);
  //     const newStateItems = [...itemsBefore, ...itemsAfter];

  //     return {
  //       prodctData: newStateItems
  //     }
  //   })
  // }

  // changeTopStatus = (id) => {
  //   this.setState(({prodctData}) => {
  //     const itemIndex = prodctData.findIndex((idItem) => idItem.id === id);
  //     const findItem = prodctData.find((idItem) => idItem.id === id);
  
  //     const arrBeforeItem = prodctData.slice(0, itemIndex);
  //     const arrAfterItem = prodctData.slice(itemIndex +1);
  //     const newArrItems = [findItem, arrBeforeItem];
  //     console.log(newArrItems)

  //     return {
  //       productData: newArrItems
  //     }

  //   })
  // }
  updateProductData() {}

  render() {
    console.log(this.props.testStore)
    return (
      <div className="App">
        <Header updateProductData={this.updateProductData}/>
        <MainContainer productData={this.props.testStore} removeProduct={this.removeProduct} changeTopStatus={this.changeTopStatus}/>
      </div>
    );
  }
}

export default connect(state => ({testStore: state}), dispatch => ({}))(App);