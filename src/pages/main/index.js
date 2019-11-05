import React, { Component } from 'react';
import api from '../../services/api';

class Main extends Component {

    constructor() {
        super();
        this.state = {}; 
      }

    componentDidMount(){
        this.loadPeople();
    }//Function

    loadPeople = async () => {
        const response = await api.get('/people');

        console.log(response.data.results);
    };//arrowFunction


    render() {
        return <h1>@douglasabnovato star wars</h1>
    }
}
export default Main;