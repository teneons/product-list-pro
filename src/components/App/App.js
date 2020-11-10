import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       prodctData: null
    }
  }
  

  updateProductData = (data) => {
    this.setState({prodctData: data})
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
