import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {

    //no state

    //no methods

    render(){
        console.log(this.props)
        const map = this.props.inventory.map((element, i) => {
            return (
                
                <Product name={element.name} price={element.price} img={element.img}/>
            )
        });

        return(
            <div>
                {map}
                {/* Dashboard.js
                <Product img={this.props.img} name={this.props.name} price={this.props.price}/> */}
            </div>
        )
    }
}