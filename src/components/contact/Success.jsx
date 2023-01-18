import React, { Component } from 'react'
import './Success.css'
// import { Link } from 'react-router-dom'

export class Success extends Component {
  render() {
    return (
      <div id='success'>
        <div className='error_container'>
          <h1><i className='fas fa-check-double'></i></h1>
          <h2>Sua mensagem foi enviada</h2>
          <p>Agradecemos seu contato. Não se preocupe, normalmente respondo e-mails dentro de 24 horas.</p>
          <div className="go_button_container" style={{display: 'flex'}}>
            <button onClick={this.props.display.bind()}>Thanks</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Success
