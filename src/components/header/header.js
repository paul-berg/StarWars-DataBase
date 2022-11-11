import React from "react"
import {Link, NavLink} from 'react-router-dom'

import './header.css'

const Header = ({onServiceChange}) => {
    return (
        <div
        className="header d-flex">
            <h3>
                <NavLink to='/'>
                    Star DB
                </NavLink>
            </h3>
            <ul className="d-flex">
                <li>
                    <NavLink to='/people'> People </NavLink>
                </li>
                <li
                >
                    <NavLink to='/planets'> Planets </NavLink>
                </li>
                <li
                >
                    <NavLink to='/starships'>Starships</NavLink>    
                </li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={onServiceChange}
            >
                Change Service
            </button>
        </div>
    )
}
export default Header