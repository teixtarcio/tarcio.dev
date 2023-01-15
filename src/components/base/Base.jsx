import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Base.css";
import avi from "../../assets/img/kadet_big.png";
import navLine from "../../assets/svgs/menu-line.svg";
import logo from "../../assets/img/smallavi.png";
import arrow from "../../assets/svgs/arrow.svg";

export class Base extends Component {
  render() {
    return (
      <div className='base_container'>
        <div className='hero'>
          <div className='intro_box'>
            <h1>
              Olá, eu sou <br /> Tárcio Teixeira.
            </h1>
            <div className='avi'>
              <img src={avi} alt='avatar' />
            </div>
          </div>

          <div className='description'>
            <p>
              <span>
              Eu sou um <span className='highlight'>desenvolvedor mobile</span>. Crio experiências interativas para pessoas incríveis usando o ecossistema <span className="highlight two">Javascript</span>, com foco principalmente em <span className="highlight two">React</span> e <span className="highlight two">React Native</span>.
              </span>
            </p>
          </div>

          <div className='go_button_container'>
            <Link to='/work' className='explore'>
              <button className='explore'>
                Explore <span class='material-icons'>arrow_right</span>
              </button>
            </Link>
          </div>
        </div>

        <nav>
          <ul>
            <li className={this.props.menu[0]}>
              <small>
                00
                <Link to='/'>
                  <img src={navLine} alt='menu bullet' /> PROJETOS
                </Link>
              </small>
            </li>

            <li className={this.props.menu[1]}>
              <small>
                01
                <Link to='/resume'>
                  <img src={navLine} alt='menu bullet' /> CURRÍCULO
                </Link>
              </small>
            </li>

            <li className={this.props.menu[2]}>
              <small>
                02{" "}
                <Link to='/contact'>
                  <img src={navLine} alt='menu bullet' /> CONTATO
                </Link>
              </small>
            </li>
          </ul>
        </nav>

        <div className='footer'>
          <img src={logo} alt='' />
          <div className='social'>
            <a
              href='https://github.com/teixtarcio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i> Github
              <img src={arrow} alt='pointer' />
            </a>

            <a
              href='https://instagram.com/teixtarcio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i> Instagram{" "}
              <img src={arrow} alt='pointer' />
            </a>
          </div>

          <div className='credits'>
            <p>
              Inspirado em
              <a
                href='https://sarahdayan.dev/'
                target='_blank'
                rel='noreferrer noopener'
              >
                Sarah Dayan
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
