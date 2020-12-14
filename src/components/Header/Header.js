import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



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

    const svgToggler = <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-bookshelf" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"/>
    </svg>

    return (
      <div>
        <nav className="d-flex justify-content-center navbar navbar-expand-lg bg-dark">

          <span className="navbar-brand text-uppercase text-white font-weight-bold" href="#">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="Logo" loading="lazy"></img>
            Product list <span className="badge bg-light text-dark">PRO</span>
          </span>

          <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span>{svgToggler}</span>
          </button>

          <div className="d-flex justify-content-center col-12 col-md-8 col-lg-5">
          <div className="collapse navbar navbar-collapse" id="navbarNav">
            <div className="d-flex justify-content-center align-items-center row">
              <button type="button" className="btn btn-light ml-5" data-toggle="modal" data-target="#exampleModal">{svgPlus}</button>
              <div className="d-flex align-items-center ml-2">
                <input type="text" className="form-control mr-1" ref={(input) => this.txtSearch = input} placeholder="Search product" />
                <button type="button" onClick={this.getSearchTxt.bind(this)} className="btn btn-light">{svgSearch}</button>
              </div>
            </div>
          </div>
          </div>

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
                    <input type="text" className="form-control mb-2" ref={(input)=> this.txtTitle = input} placeholder="Product name" required/>
                    <input type="text" className="form-control mb-2" ref={(input)=> this.txtDescription = input}  placeholder="Product description" required />
                    <input type="number" className="form-control mb-2" ref={(input)=> this.txtPrice = input} placeholder="Product price" required/>
                    <input type="text" className="form-control mb-2" ref={(input)=> this.txtImg = input} placeholder="Product url img" required/>
                    <div className="d-flex justify-content-center">
                      <button type="button" onClick={this.allDataProduct.bind(this)} className="btn btn-dark">{svgPlus}</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    headerAddData: (id, title, description, price, img, top) => {
      dispatch({type: 'ADD_PRODUCT', payload: {id: id, title: title, description: description, price: price, img: img, top: top}})
  },
    searchData: (searchTxt)=>{
      dispatch({type: 'SEARCH_PRODUCT', payload: searchTxt})
    }
  })
  )(Header);