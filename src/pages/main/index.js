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
            {/*
                {peoples.map(people => (//"_id" identificador de cada personagem
                    <article key={people._id}>
                        <strong>{people.name}</strong>
                        <p>{people.films}</p>
                        <a href="">Saiba Mais</a>
                    </article>
                ))}
            */}
                <article>
                    <strong>Name 1</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>

                <article>
                    <strong>Name 2</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 3</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 4</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 5</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 6</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 7</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 8</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 9</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <article>
                    <strong>Name 10</strong>
                    <p>Film</p>
                    <a href="">Saiba Mais</a>
                </article>
                <div className="actions">
                    <button>Anterior</button>
                    <button>Próxima</button>
                </div>
            </div>
        );
    }
}
export default Main;