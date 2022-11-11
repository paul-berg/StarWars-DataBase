import React from "react";
import './planet-details.css'

const PlanetDetails = () => {
    return (
        <div className="planet-details card">
            <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                className='planet-image' alt="planet" />
            <div className="card-body">
                <h4>Naboo</h4>
                    <ul className="list-group item-list">
                        <li className="list-group-item">
                            <span className="term">1</span>
                            <span >2</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">1</span>
                            <span >2</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">1</span>
                            <span >2</span>
                        </li>
                    </ul>
            </div>
            
        </div>
    )
}

export default PlanetDetails