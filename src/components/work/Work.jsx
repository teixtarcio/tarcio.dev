import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";

export class Work extends Component {
  state = {
    projects: [

      {
        id: uuid(),
        title: "TRastreio",
        description: "Aplicativo de consulta de encomendas consumindo a API dos Correios",
        github: "https://github.com/teixtarcio/TRastreio/",
        live: "https://github.com/teixtarcio/TRastreio/",
        stack: "Java + API Rest Correios",
        isPrivate: true,
      },

      {
        id: uuid(),
        title: "TDDos",
        description: "Ferramenta para automatizar um ataque de negação de serviços (Ddos)",
        github: "https://github.com/teixtarcio/TDDos",
        live: "https://github.com/teixtarcio/TDDos",
        stack: "Javascript + API XMLHttpRequest",
        isPrivate: true,
      },

      {
        id: uuid(),
        title: "Em desenvolvimento",
        description: "",
        github: "",
        live: "",
        stack: "Em breve um novo projeto",
        isPrivate: true,
      },

      {
        id: uuid(),
        title: "Em desenvolvimento",
        description: "",
        github: "",
        live: "",
        stack: "Em breve um novo projeto",
        isPrivate: true,
      }, 
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span class='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              Contato <span class='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
