import React, {Component} from 'react';


export default class MainContainer extends Component {

  render() {

    return(
      <div className='container-flued d-flex justify-content-center'>
        <div className='d-flex justify-content-around row row-cols-3 col-12 col-sm-10'>
          <div className='card col-5 col-sm-3 m-1'>
            42
          </div>
          <div className='card col-5 col-sm-3 m-1'>
            42
          </div>
          <div className='card col-5 col-sm-3 m-1'>
            42
          </div>
          <div className='card col-5 col-sm-3 m-1'>
            42
          </div>
          <div className='card col-5 col-sm-3 m-1'>
            42
          </div>
        </div>
      </div>
    )
  }
}