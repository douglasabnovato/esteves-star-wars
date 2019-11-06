import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api';
import './styles.css'

class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadProducts();
    }//Function

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { results, ...productInfo} = response.data;

        this.setState({ products: results, productInfo, page });
    };//arrowFunction 

    prevPage = () => {
        const { page, productInfo } = this.state;
        if( page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;
        if( page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };

    render() {/*count next previous results ::: name height mass hair_color skin_color eye_color birth_year gender homeworld films species vehicles starships created edited url*/
        const { products, page, productInfo } = this.state;
        
        return (
            <div className="product-list">
            {/*
                {products.map(product => (//"_id" identificador de cada personagem
                    <article key={product._id}>
                        <strong>{product.name}</strong>
                        <p>{product.films}</p>
                        <Link to={`/products/${product._id}`}>Saiba Mais</Link>
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
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}
export default Main;