import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'

class Main extends Component {

    state = {
        peoples:[],
    }

    componentDidMount(){
        this.loadPeople();
    }//Function

    loadPeople = async () => {
        const response = await api.get('/people');

        this.setState({peoples: response.data.results});
    };//arrowFunction


    render() {/*count next previous results ::: name height mass hair_color skin_color eye_color birth_year gender homeworld films species vehicles starships created edited url*/
        const { peoples } = this.state;
        
        return (
            <div className="people-list">
                {peoples.map(people => (//"_id" identificador de cada personagem
                    <article key={people._id}>
                        <strong>{people.name}</strong>
                        <p>{people.films}</p>
                        <a href="">Saiba Mais</a>
                    </article>
                ))}
            </div>
        );
    }
}
export default Main;