import React, { Component } from 'react'
import HomeContext from "../../context/home-context"
import "./style.css"

class CodeBlock extends Component {
    render() {
        return (
            <HomeContext.Consumer>
                {context => (
                    <div className="container">
                        <div className="headerLine">
                            <h3 className="bodyHeader">Projects</h3>
                        </div>
                        <div className="cardWrapper">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[0].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <a href="https://github.com/obrienceob/BookSearch" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">    
                                            <p className="cardName">Google Books Search</p>
                                        </div>
                                        </a>
                                        <a href="https://fathomless-dawn-44103.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">
                                            <p className="cardName">Link to deployed App</p>
                                        </div>
                                        </a>
                                        <p className="cardTags">MongoDB, Express, React, Node</p>
                                    </div>
                                </div>
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[1].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <a href="https://github.com/obrienceob/TechBlog" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">    
                                            <p className="cardName">Tech Blog</p>
                                        </div>
                                        </a>
                                        <a href="https://stark-mesa-75769.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">
                                            <p className="cardName">Link to deployed App</p>
                                        </div>
                                        </a>
                                        <p className="cardTags">MVC, SQL, Hanlebars, JS</p>
                                    </div>
                                </div>   
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[2].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <a href="https://github.com/obrienceob/Employee-Directory" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">    
                                            <p className="cardName">Employee Directory</p>
                                        </div>
                                        </a>
                                        <a href="https://obrienceob.github.io/Employee-Directory/" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">
                                            <p className="cardName">Link to deployed App</p>
                                        </div>
                                        </a>
                                        <p className="cardTags">React, API, Bootstrap</p>
                                    </div>
                                </div>          
                    </div>
                </div>
                )}
            </HomeContext.Consumer>
        )
    }
}

export default CodeBlock