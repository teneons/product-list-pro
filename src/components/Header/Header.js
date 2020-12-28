import React, { Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {search_product} from '../../reducers/actions';
import AddProduct from './AddProduct';


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      search: null
    }
  }

  searchProduct () {
    this.props.searchProd({search: this.state.search}) //pass obj to actions

    this.setState(this.state.search = null) //cleaning state (yes, not here destructuring)
  }


  render() {
    //svg
    const svgSearch = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
    </svg>

    return (
      <div>
        <nav className="d-flex justify-content-center navbar navbar-expand-lg bg-dark">

          <span className="navbar-brand text-uppercase text-white fw-bold" href="#">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="Logo" loading="lazy"></img>
            Products
          </span>

          <div className='d-flex justify-content-around col-sm-12 col-md-9 col-lg7 row-sm'>
            <div>
            <div className='input-group'>
              <input type="search" className="form-control" onChange={e => this.setState({search: e.target.value})} name='search' placeholder="Search product" aria-label="Search" />
              <button type="button" onClick={() => this.searchProduct()} className="btn btn-outline-light">{svgSearch}</button>
            </div>
            </div>

            <AddProduct />

            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Name Name
              </button>
              
              <ul className="dropdown-menu dropdown-menu-dark text-center" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Account</a></li>
                <li><a className="dropdown-item disabled" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>

        </nav>
        
      </div>
  )
}
}

const mapDispatchToProps = dispatch => {
  return {
    searchProd: (data) => dispatch(search_product(data))
  }
}


export default connect(null, mapDispatchToProps)(Header);