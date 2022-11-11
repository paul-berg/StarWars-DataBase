import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";


const PeoplePage = () => {
    const [id, setId] = useState(null);
    return (
        <PersonList
            onItemSelected={setId}
            />
        // <Row
        //     left={<PersonList
        //         onItemSelected={this.onItemSelected}
        //     />}
        //     right={<PersonDetails itemId={selectedItem} />}
        // />
    )
}

export {PeoplePage};



 