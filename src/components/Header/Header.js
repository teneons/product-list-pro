import React from 'react';
import logo from './logo.svg';


export default function Header() {

  return (
    <nav className="navbar navbar-light bg-dark d-flex justify-content-center">
      <span className="navbar-brand text-uppercase text-white font-weight-bold" href="#">
        <img src={logo} width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy"></img>
          Product list
      </span>
    </nav>
  )
}