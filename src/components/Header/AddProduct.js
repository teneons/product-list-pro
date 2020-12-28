import React, { Component } from 'react';

export default class AddProduct extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      description: '',
      price: '',
      image: ''
    }
  }

  render() {
    const svgPlus = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>

    return (
      <div>
        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{svgPlus}</button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-uppercase font-weight-bold" id="exampleModalLabel">Add new product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div>
                  <input type="text" className="form-control mb-2" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} name='title' placeholder="Product name" required />
                  <input type="text" className="form-control mb-2" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} name='description' placeholder="Product description" required />
                  <input type="number" className="form-control mb-2" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} name='price' placeholder="Product price" required />
                  <input type="text" className="form-control mb-2" value={this.state.image} onChange={e => this.setState({ image: e.target.value })} name='image' placeholder="Product url image" required />
                  <div className="d-flex justify-content-center">
                    <button type="button" onClick={() => this.addProduct()} className="btn btn-dark">Add {svgPlus}</button>
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