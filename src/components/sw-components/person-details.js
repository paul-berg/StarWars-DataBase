import React from "react"

import ItemDetails from "../item-details/item-details"
import Record from "../Record"
import { withSwapiService } from "../hoc-helpers"
import { useParams } from "react-router-dom"

const PersonDetails = ({ getData, getImageUrl }) => {
    const { id: itemId } = useParams()
    return (
            <ItemDetails 
                selectedId={itemId}
                getData={getData}
                getImageUrl={getImageUrl}
                // то, что выше - то же, что и 
                //{...props}, если бы 
            >
                <Record field='gender' label='Gender' />
                <Record field='birthYear' label='Birth Year' />
                <Record field='eyeColor' label='Eye Color' />
            </ItemDetails>
            ) 
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)