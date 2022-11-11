import React from "react";
import PropTypes from 'prop-types'

import './item-list.css'
import { Link, useLocation } from "react-router-dom";


const ItemList = (props) => {
    const location = useLocation()
    const urlRegExp = /[^/]\w+/
    const url = location.pathname.match(urlRegExp)[0]
    console.log(url);
    const { data, setId, children: renderLabel } = props
        const items = data.map(item => {
            const label = renderLabel(item)
            return (
                <Link className="list-group-item"
                    key={item.id}
                    to={`/${url}/${item.id}`}
                    onClick={() => setId(item.id)}   
                >
                    {label}
                </Link>
            )
        })
        

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
    )
    
    
    
} 

ItemList.defaultProps = {
    setId: () => {}
}

ItemList.propTypes = {
    setId: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList

