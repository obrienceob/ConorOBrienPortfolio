import React, { Component } from 'react'
import HomeContext from "../../context/home-context"
import "./style.css"

class ProjectBlock extends Component {
    render() {
        return (
            <HomeContext.Consumer>
                {context => (
                    <div className="container">
                        <div className="cardWrapper">
                            <div className="card homeCard grow">
                                <img className="cardImage" src={context[3].image} alt="Project One: Google Books Search" />
                                <div className="cardText">
                                        <a href="https://github.com/obrienceob/BudgetTracker" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">    
                                            <p className="cardName">Budget Tracker</p>
                                        </div>
                                        </a>
                                        <a href="https://obscure-dusk-81782.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="cardText">
                                            <p className="cardName">Link to deployed App</p>
                                        </div>
                                        </a>
                                        <p className="cardTags">MongoDB, Mongoose, Node, IndexedDB</p>
                                    </div>
                                </div>
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[4].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <a href="https://github.com/ShaylaStevenson/PetSeekerPalooza/" target="_blank" rel="noopener noreferrer">
                                            <div className="cardText">    
                                                <p className="cardName">Pet Seeker Palooza</p>
                                            </div>
                                        </a>
                                        <a href="https://shrouded-lake-69367.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <div className="cardText">
                                                <p className="cardName">Link to deployed App</p>
                                            </div>
                                        </a>
                                        <p className="cardTags">MySQL, JS, Express, Node</p>
                                    </div>
                                </div>
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[5].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <a href="https://github.com/obrienceob/FitnessTracker" target="_blank" rel="noopener noreferrer">
                                            <div className="cardText">    
                                                <p className="cardName">Fitness Tracker</p>
                                            </div>
                                        </a>
                                        <a href="https://mighty-anchorage-53908.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <div className="cardText">
                                                <p className="cardName">Link to deployed App</p>
                                            </div>
                                        </a>
                                        <p className="cardTags">Mongo, Express, JS</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                )}
            </HomeContext.Consumer>
        )
    }
}

export default ProjectBlock