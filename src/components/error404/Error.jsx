import React, { Component } from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

export class Error extends Component {
  render() {
    return (
      <div id='error404'>
        <div className='error_container'>
          <h1>404</h1>
          <p>Parece que você se perdeu</p>
          <div className="go_button_container">
            <Link to='/'> <button>Home</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Error
