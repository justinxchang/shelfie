import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: []
    }
  }

  //method
  componentDidMount(){
    axios.get('/api/inventory').then(res => this.setState({
      inventory: res.data,
    }));
  }

  render() {
    return (
      <div className="App">
        <Form getList={this.componentDidMount} />
        <Dashboard inventory={this.state.inventory}/>
        
      </div>
    );
  }
}

export default App;
