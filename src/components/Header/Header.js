import React, { Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {search_product} from '../../reducers/actions';
import AddProduct from './AddProduct';
import SearchProduct from './SearchProduct';


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

    return (
      <div>
        <nav className="d-flex justify-content-center navbar navbar-expand-lg bg-dark">

          <span className="navbar-brand text-uppercase text-white fw-bold" href="#">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="Logo" loading="lazy"></img>
            Products
          </span>

          <div className='d-flex justify-content-around col-sm-12 col-md-9 col-lg7 row-sm'>
            <div>
                
              <SearchProduct />
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