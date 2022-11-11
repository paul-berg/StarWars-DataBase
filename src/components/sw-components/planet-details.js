import React from "react"
import { useParams } from "react-router-dom"

import ItemDetails from "../item-details/item-details"
import Record from "../Record"
import { withSwapiService } from "../hoc-helpers"



const PlanetDetails = ({ getData, getImageUrl }) => {
    const { id: itemId } = useParams()
    return (
        <ItemDetails
            selectedId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}
        >
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />            
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails)