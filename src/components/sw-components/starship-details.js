import React from "react"
import { useParams } from "react-router-dom"

import ItemDetails from "../item-details/item-details"
import Record from "../Record"


import { withSwapiService } from "../hoc-helpers"

const StarshipDetails = ({ getData, getImageUrl, match }) => {
    const { id: itemId } = useParams()
                return (
                    <ItemDetails
                    selectedId={itemId}
                    getData={getData}
                    getImageUrl={getImageUrl}
                >
                    <Record field='model' label='Model' />
                    <Record field='length' label='Length' />
                    <Record field='costInCredits' label='Cost' />
                </ItemDetails>
                )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)