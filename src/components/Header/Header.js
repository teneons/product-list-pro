import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';


class Header extends Component {

  allDataProduct() {
    this.props.headerAddData(Math.random().toString(36).substr(2, 9), this.txtTitle.value, this.txtDescription.value, this.txtPrice.value, this.txtImg.value, false)
    this.txtTitle.value = ''
    this.txtDescription.value = ''
    this.txtPrice.value = ''
    this.txtImg.value = ''
  }

  getSearchTxt() {
    this.props.searchData(this.txtSearch.value)
  }
  
  render() {
    const svgPlus = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>

    const svgSearch = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
    </svg>

    return (
      <div>
        <nav className="navbar navbar-light bg-dark d-flex justify-content-center">
          <span className="navbar-brand text-uppercase text-white font-weight-bold" href="#">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="" loading="lazy"></img>
            Product list <span className="badge bg-light text-dark">PRO</span>
          </span>
            <button type="button" className="btn btn-light ml-5" data-toggle="modal" data-target="#exampleModal">{svgPlus}</button>
            <input type="text" className="ml-4" ref={(input) => this.txtSearch = input} placeholder="Search proructs" />
            <button type="button" onClick={this.getSearchTxt.bind(this)} className="btn btn-light input-group-text">{svgSearch}</button>
        </nav>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-uppercase font-weight-bold" id="exampleModalLabel">Add new product</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <div>
                    <input type="text" className="form-control mb-2" ref={(input)=> this.txtTitle = input} placeholder="Product name" />
                    <input type="text" className="form-control mb-2" ref={(input)=> this.txtDescription = input}  placeholder="Product description" />
                    <input type="number" className="form-control mb-2" ref={(input)=> this.txtPrice = input} placeholder="Product price" />
                    <input type="text" className="form-control mb-2" ref={(input)=> this.txtImg = input} placeholder="Product url img" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" onClick={this.allDataProduct.bind(this)} className="btn btn-dark">{svgPlus}</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(state => ({
  products: state.products.filter(product => product.title.includes(state))
  }),
  dispatch => ({
    headerAddData: (id, title, description, price, img, top) => {
      dispatch({type: 'ADD_PRODUCT', payload: {id: id, title: title, description: description, price: price, img: img, top: top}})
  },
    searchData: (searchTxt)=>{
      dispatch({type: 'SEARCH_PRODUCT', payload: searchTxt})
  }}
  ))(Header);