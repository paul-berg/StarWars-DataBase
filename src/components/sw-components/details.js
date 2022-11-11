// import React from "react"

// import ItemDetails from "../item-details/item-details"
// import Record from "../Record"

// import { SwapiServiceConsumer } from "../swapi-service-context"

// const PersonDetails = ({itemId}) => {
//     return (
//         <SwapiServiceConsumer>
//             {
//                  (swapiService) => {
//                     return (
//                         <ItemDetails
//                         selectedId={itemId}
//                         getData={swapiService.getPerson}
//                         getImageUrl={swapiService.getPersonImage}
//                     >
//                         <Record field='gender' label='Gender' />
//                         <Record field='birthYear' label='Birth Year' />
//                         <Record field='eyeColor' label='Eye Color' />
//                     </ItemDetails>
//                     )
//                 }        
//             }           
//         </SwapiServiceConsumer>
//             ) 
// }
// const PlanetDetails = ({ itemId }) => {
//     <SwapiServiceConsumer>
//         {
//             ({getPlanet, getPlanetImage}) => {
//                 return (
//                     <ItemDetails
//                         selectedId={itemId}
//                         getData={getPlanet}
//                         getImageUrl={getPlanetImage}
//                     >
//                         <Record field='population' label='Population' />
//                         <Record field='rotationPeriod' label='Rotation Period' />
//                         <Record field='diameter' label='Diameter' />            
//                     </ItemDetails>
//                 )
//             }
//         }
//     </SwapiServiceConsumer>
// }
// const StarshipDetails = ({ itemId }) => {
//     <swapiService>
//         {
//             ({getStarship, getStarshipImage}) => {
//                 return (
//                     <ItemDetails
//                     selectedId={itemId}
//                     getData={getStarship}
//                     getImageUrl={getStarshipImage}
//                 >
//                     <Record field='model' label='Model' />
//                     <Record field='length' label='Length' />
//                     <Record field='costInCredits' label='Cost' />
//                 </ItemDetails>
//                 )
//             }
//         }
//     </swapiService>
// }

// export {
//     PersonDetails,
//     PlanetDetails,
//     StarshipDetails
// }