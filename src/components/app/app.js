import React from 'react'


import { PersonDetails, PlanetDetails } from '../sw-components'
import { StarshipDetails } from "../sw-components";

import Layout from '../layout'

// import { StashipsPage } from '../pages'
import { PeoplePage } from '../pages/people-page'
import { PlanetPage } from '../pages/planet-page'
import { StashipPage } from '../pages/starship-page'

import { SwapiServiceProvider } from "../swapi-service-context"

import './app.css'

import {  Route, Routes} from 'react-router-dom'


const App = () => {
        return (
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<h1>Welcome to the Star DB</h1>}></Route>
                    <Route path='people/' element={<PeoplePage />}/>
                    <Route path='people/:id' element={<PersonDetails/>}/>
                    <Route path='planets' element={<PlanetPage />} />
                    <Route path='planets/:id' element={<PlanetDetails />} />
                    <Route path='starships' element={<StashipPage />} />
                    <Route path='starships/:id' element={<StarshipDetails />} />

                </Route>                                
            </Routes>           
           
                                           

        )

}

export {App}

