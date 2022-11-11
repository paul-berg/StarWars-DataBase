import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row";

// const onItemSelected = (id) => {
//     this.setState({ selectedItem: id })
// }

const PlanetPage = () => {
    const {pathname} = useLocation()
    console.log(pathname);
    const [id, setId] = useState(null);
        return (
            <PlanetList
                    onItemSelected = {setId}
                />
            // <Row
            //     left={<PlanetList
            //         onItemSelected = {this.onItemSelected}
            //     />}
            //         right={<PlanetDetails itemId={selectedItem} />}
            // />
        )

}

export { PlanetPage }


