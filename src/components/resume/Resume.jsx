import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: "Playarone",
        position: "Frontend Developer",
        started: "September 2020",
        ended: "Feburary 2021",
        description:
          "I Joined the Playarone engineering team in building an online gaming community.",
        achievements: [
          "Worked with React and SASS to build components from scratch",
          "Handled complex state management using react hooks",
          "Worked closely with a senior dev to integrate graphQL and typescript.",
        ],
      },

      {
        company: "Charisol",
        position: "Frontend Developer [Contract]",
        started: "October 2020",
        ended: "March 2021",
        description:
          "I worked with the charisol product team on a contract basis to build a web application for a fintech startup",
        achievements: [
          "Transformed figma prototypes to functional UIs using react js, react context and sass",
          "Made use of tools like Notion & Usepastel for task management and feedback",
          "Interacted with GraphQL apis from the client side using Apollo GraphQL",
        ],
      },

      {
        company: "HNG Internships",
        position: "Frontend Developer [Intern]",
        started: "May 2020",
        ended: "August 2020",
        description:
          "I contributed in developing user interfaces for quite a number of products within three months while learning new skills",
        achievements: [
          "Worked with node.js developers to build a certificate generator",
          "Headed the frontend department of my team to deliver responsive web templates to be sold on envato market",
          "Built an open source micro API project alongside python (Django) Developers using Jinja template engine on the frontend",
        ],
      },
    ];

    return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Tárcio Teixeira</h2>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/teixtarcio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href="https://drive.google.com/file/d/1tbgKQ8dsGmNXOR5Axb7vWhbOBDBA-3uV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fas fa-download"></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className="subheading">Desenvolvedor mobile</p>

          <div className="summary">
            <p>
            Sou um desenvolvedor mobile, apaixonado por tecnologia. 
            Estou sempre buscando aprender e me atualizar sobre as últimas 
            tendências e novidades do mercado, além disso tenho total convicção 
            que posso trazer valor para qualquer equipe com minhas habilidades 
            e paixão pelo desenvolvimento de aplicativos.
            </p>
          </div>

          <div className="divider">
            <p>Minhas tecnologias</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              HTML/CSS, Javascript [ES6], Typescript, React, React Native e Expo.
            </p>
          </div>

          <div className="divider">
            <p>Entusiasta em</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              Segurança da informação, hacking ético, blockchain e outros.
            </p>
          </div>

          <div className="divider">
            <p>No trabalho</p>
            <span></span>
          </div>

          <div className="skills">
            <p>Metodologia Scrum, código limpo e boas práticas.</p>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/contact">
            <button>
              <span class="material-icons">arrow_left</span> Contato
            </button>
          </Link>
          <Link to="/">
            <button>
              Home <span class="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
