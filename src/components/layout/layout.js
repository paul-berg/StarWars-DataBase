import React from 'react';
import { DummySwapiService, SwapiService } from '../../services'
import ErrorBoundary from '../error-boundaty';
import { SwapiServiceProvider } from '../swapi-service-context';
import { Outlet,   } from 'react-router-dom';
import RandomPlanet from '../random-planet';
import Header from '../header';


export default class Layout extends React.Component {
    constructor() {
        super()
        this.state= {
            swapiService: new  SwapiService()
        }
        
    }
    
    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService
                ? DummySwapiService : SwapiService 
            return {
                swapiService: new Service()
            }
        })
    }
    
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    render() {
        return (
            <>
                 <ErrorBoundary>
                    <SwapiServiceProvider value={this.state.swapiService}>
                            <div className="stardb-app">
                                <Header onServiceChange={this.onServiceChange} />
                                <RandomPlanet />
                                <Outlet />
                            </div>                                       
                    </SwapiServiceProvider>
                </ErrorBoundary>
            </>
        );
    }

}

