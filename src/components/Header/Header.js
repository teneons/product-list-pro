import React from 'react';
import logo from './logo.svg';


export default function Header() {

  const svgPlus = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
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

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-uppercase font-weight-bold" id="exampleModalLabel">Add new product</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <form>
              <div>
                <input type="text" class="form-control mb-2" placeholder="Product name" />
                <input type="text" class="form-control mb-2" placeholder="Product description" />
                <input type="text" class="form-control mb-2" placeholder="Product price" />
                <input type="text" class="form-control mb-2" placeholder="Product url img" />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" class="btn btn-dark">{svgPlus}</button>
              </div>
            </form>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}