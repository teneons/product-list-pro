import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       description: '',
       price: '',
       img: '',
       top: false
    }
  }

  //add data to state
  addTitle = (e) => {
    this.setState({title: e.target.value})
  }
  addDescription = (e) => {
    this.setState({description: e.target.value})
  }
  addPrice = (e) => {
    this.setState({price: e.target.value})
  }
  addImg = (e) => {
    this.setState({img: e.target.value})
  }

  //processing data
  onSubmitProduct = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9)
    this.props.updateProductData(id, this.state.title, this.state.description, this.state.price, this.state.img, this.state.top);
    this.setState({title: '', description: '', price: '', img: '', top: false});
  }

  render() {
    const svgPlus = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>

    return (
      <div>
        <nav className="navbar navbar-light bg-dark d-flex justify-content-center">
          <span className="navbar-brand text-uppercase text-white font-weight-bold" href="#">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="" loading="lazy"></img>
          Product list
      </span>
          <button type="button" className="btn btn-light ml-5" data-toggle="modal" data-target="#exampleModal">{svgPlus}</button>
        </nav>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-uppercase font-weight-bold" id="exampleModalLabel">Add new product</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <form onSubmit={this.onSubmitProduct}>
                  <div>
                    <input type="text" className="form-control mb-2" onChange={this.addTitle} value={this.state.title} placeholder="Product name" />
                    <input type="text" className="form-control mb-2" onChange={this.addDescription} value={this.state.description}  placeholder="Product description" />
                    <input type="number" className="form-control mb-2" onChange={this.addPrice} value={this.state.price} placeholder="Product price" />
                    <input type="text" className="form-control mb-2" onChange={this.addImg} value={this.state.img} placeholder="Product url img" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark">{svgPlus}</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(state => ({}),
  dispatch => ({headerAddData: (this.state.id, this.state.title, this.state.description, this.state.price, this.state.img, this.state.top) => {
    dispatch({type: 'ADD_PRODUCT', payload: ''})
  }))(Header);