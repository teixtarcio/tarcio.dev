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
        title: "TShop E-commerce",
        description: "RESTApi simulando uma loja online usando operações CRUD",
        github: "https://github.com/teixtarcio/t-shop",
        live: "/",
        stack: "NodeJS + ReactJS + React Native + Typescript",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "TNPCActions",
        description: "Plugin de Minecraft para manipular NPC's no jogo",
        github: "https://github.com/teixtarcio/tnpc-actions",
        live: "",
        stack: "Java + Spigot",
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
