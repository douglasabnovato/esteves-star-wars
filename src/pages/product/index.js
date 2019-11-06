import React, { Component } from "react";
import api from "../../services/api";
import './styles.css'

export default class Product extends Component {

    state = {
        product: {}

    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/products/id`);
        this.setState({ product: response.data});
    }

    render(){
        const { product } = this.state;
        return (
            <div className="product-info">
                {/*
                <h1>{product.name}</h1>
                <p>{product.film}</p>
                <p>
                    url: <a href={product.url}>{product.url}</a>
                </p>
                */}
                <h1>Name:  people</h1>
                <p>Film: film</p>
                <p>
                URL: <a href="https://www.google.com.br">film</a>
                </p>
            </div>
        );
    }
}