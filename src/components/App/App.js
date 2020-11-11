import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    console.log(this.props.testStore)
    return (
      <div className="App">
        <Header/>
        <MainContainer productData={this.props.testStore} />
      </div>
    );
  }
}

export default connect(state => ({testStore: state}))(App);