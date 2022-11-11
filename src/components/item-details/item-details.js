import React from "react";
import SwapiService from "../../services/swapiService";
import Spinner from "../spinner";

import './item-details.css'



export default class ItemDetails extends React.Component {
    swapiService = new SwapiService()
    constructor() {
        super()
        this.state = {
            item: {},
            loading: false,
            image: null,
        }
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl
        ) {
            this.setState({
                loading: true
            })
            this.updateItem()
        }

    }

    updateItem = () => {
        const { selectedId, getData, getImageUrl } = this.props
        const id = selectedId ? selectedId : 5 
        getData(id)
            .then(item => {
                // const { name, gender, birthYear, eyeColor } = item
                this.setState({
                    loading: false,
                    item,//все ключи получаемого item(персонаж/планета/корабль) передаются 
                    //в item из state, и им пресваиваются значения из получаемого item 
                    // item: {
                    //     id: id,
                    //     name: name,
                    //     gender: gender,
                    //     birthYear: birthYear,
                    //     eyeColor: eyeColor, 
                    // },
                    image: getImageUrl(item)
                })                
            })        
    }


    render() {
        const { item, loading, image } = this.state
        const { name } = item
        const contentFulfilled = (
            <React.Fragment>
                <img src={image}
                className="item-image" alt="item" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
                {/*  <ErrorButton/> */}
            </React.Fragment>
             )
        const content = !loading ? contentFulfilled : <Spinner /> 
        return (
            <div className="item-details card">
                {content}
            </div>
            
        )
    }
}
