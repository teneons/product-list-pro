import React, { Component } from 'react';

import img from '../Header/logo.svg';

export default class Card extends Component {

  render() {
    const svgTrash = <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-trash2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"/>
      <path fillRule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
      </svg>

    const svgPin = <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-brightness-low" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
      <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
      </svg> 

    const svgUnpin = <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-brightness-low-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
    </svg>

    let statPin = false;
    const outPinSvg = (statPin? svgPin : svgUnpin);

    return (
      <div className="card col-5 col-sm-3 m-1" style={{width: '18rem'}} key={this.props.id}>
        <img src={this.props.img} className="card-img-top rounded" alt="Product image"></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <div>
            <p className="card-text font-weight-bold float-left" style={{fontSize: '1.4rem'}}>{this.props.price} UAH</p>
            <button className="btn btn-outline-danger float-right mr-1" onClick={this.props.removeProduct}>{svgTrash}</button>
            <button className="btn btn-outline-warning float-right mr-1" onClick={this.props.changeTopStatus}>{outPinSvg}</button>
          </div>
        </div>
      </div>
    )
  }
}
