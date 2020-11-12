import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <MainContainer productData={this.props.products} />
      </div>
    );
  }
}

export default connect(state => ({products: state.products}))(App);