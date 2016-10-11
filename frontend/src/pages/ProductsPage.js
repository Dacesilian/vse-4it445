import React, { Component } from 'react';
import axios from 'axios';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log('did mont');
    axios('http://dev.backend.horato02.vse.handson.pro/api/products')
      .then((response) => {
        console.log('response', response.data)
        this.setState({
          products: response.data
        });
      })
  }

  addNewProduct() {
    console.log('this', this);
  }

  render() {
<<<<<<< HEAD
    const products = [
      {
        id: 1,
        title: 'Škoda Superb',
        price: '750 000',
        shortInfo: 'Luxury car produced in the Czech Republic.',
      },
      {
        id: 2,
        title: 'Ford Focus',
        price: '600 000',
        shortInfo: 'Sports car made in USA.',
      },
      {
        id: 3,
        title: 'Moped',
        price: '1 000',
        shortInfo: 'No comment.',
      },
      {
        id: 4,
        title: 'Ferrari',
        price: '35 000',
        shortInfo: 'My beautiful car!',
      }
    ]
=======
    const { products } = this.state;

>>>>>>> 3d487844158f713a395e094d60e9c7c4e11d58bb
    return (
      <div>
        <div className="jumbotron">
          <button
            onClick={this.addNewProduct.bind(this)}
          >click me</button>
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
