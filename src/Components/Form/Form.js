import React, {Component} from 'react'

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
    }

//methods
handleImageChange(value){
    this.setState({imgurl: value})
};

handleNameChange(value){
    this.setState({name: value})
};

handlePriceChange(value){
    this.setState({price: value})
}

handleCancel(){
    this.setState({
        name: '',
        price: 0,
        imgurl: ''
    })
}


handleSubmit(){

    
}


//handlechange
//post new product to database
//clear input boxes

    render(){
        return(
            <div>
                <div>
                    Image URL:
                    <input onChange={(event) => this.handleImageChange(event.target.value)} type='text'/>
                </div>
                <div>
                    Product Name:
                    <input onChange={(event) => this.handleNameChange(event.target.value)} type='text'/>
                </div>
                <div>
                    Price:
                    <input onChange={(event) => this.handlePriceChange(event.target.value)} type='text'/>
                </div>
                <div>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}