import React from "react";
import PropTypes from 'prop-types'

import SwapiService from '../../services/swapiService'
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner";

import './random-planet.css'

export default class RandomPlanet extends React.Component {

    static defaultProps = {
    updateInterval: 5000
    }

    static propTypes = {
        updateInterval: PropTypes.number
            // (props, propName, componentName) => {
            // const value = props[propName]
            // if (typeof value === 'number' || !isNaN(value)) {
            //     return null
            // }
            // return new TypeError(`${componentName}: ${propName} must be number`)
    // }

    }

    swapiService = new SwapiService()

    constructor() {
        super()
        this.state = {
            planet: {},
            loading: true
        }
    }

    componentDidMount() {
        const {updateInterval} = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
                // clearInterval(this.interval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }
    
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 3
        this.swapiService
            .getPlanet(id)
            .then(planet => this.onPlanetLoaded(planet))
            .catch(this.onError)
    }

    render() {
        const { planet,
            loading,
            error } = this.state
        
        const hasData = !(loading || error) 
        
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading  ? <Spinner /> : null
        const content = hasData ? <PlanetView planetInfo={planet}/> : null
            return (
                <div
                    className="random-planet jumbotron rounded">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            )
    }
}

// RandomPlanet.defaultProps = {
//     updateInterval: 100
// }

const PlanetView = ({ planetInfo }) => {
    const { id, name, population, rotationPeriod, diameter } = planetInfo
    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="planet-image" alt="planet" />
                    <div>
                        <h4>{name}</h4>
                        <ul className="list-group item-list">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>{population}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Period</span>
                                <span>{rotationPeriod}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter </span>
                                <span>{diameter}</span>
                            </li>
                        </ul>
                    </div>
        </React.Fragment>
    )
}