import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { StarshipDetails, StarshipList } from "../sw-components";
import Row from "../row";

// const StarshipPage = ({history}) => {
//             return (
//                 <StarshipList
//                     onItemSelected={(itemId) => {
//                         history.push(`/starships/${itemId}`)
//                     }}
//                     />
//             )
//         }
// export default withRouter(StarshipPage)

// const onItemSelected = (id) => {
//     this.setState({ selectedItem: id })
// }

const StashipPage = () => {
    const {pathname} = useLocation()
    console.log(pathname);
    const [id, setId] = useState(null);
        return (
            <StarshipList
            onItemSelected={setId}
            />
            // <Row
            //     left={<StarshipList
            //         onItemSelected={this.onItemSelected}
            //     />}
            //     right={<StarshipDetails itemId={selectedItem} />}
            // />
        )

}

export {StashipPage}
