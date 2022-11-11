import React from "react"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator/error-indicator"

const withData = (View) => {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                itemList: null,
                loading: true,
                error: false
            }
        }
        updateItemList = () => {
            this.setState({
                loading: true,
                error: false
            })
            this.props.getData()
                .then((itemList) => {
                    this.setState({
                        loading: false,
                        itemList: itemList
                    })                
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                })
        }
        componentDidMount() {
            this.updateItemList()
        }
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.updateItemList()
            }
        }

        render() {
            const { itemList, loading, error } = this.state
            if (loading) {
                return <Spinner/>
            }
            if (error) {
                return <ErrorIndicator/>
            }
            return (
                <View {...this.props} data={itemList} />
            )
        }
    }
    
}

export default withData