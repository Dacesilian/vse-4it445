import React, { Component } from 'react';
import classNames from 'classnames';

export class ProductDetailPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeTabId: 0
    };
  }

  selectTab(event, tabId) {
    event.preventDefault();
    this.setState({
      activeTabId: tabId
    });
  }

  renderTab(activeTabId){
    const { productId } = this.props.params;
    if(activeTabId === 0){
      return (
        <div>
          <h3>Product ID: {productId}</h3>
          <p>Price: <span className="price">750 000 Kč</span></p>
          <p>Luxury car produced in the Czech Republic.</p>
        </div>
      );
    } else if(activeTabId === 1){
      return (
        <div>
          <br />
          <ul>
            <li><strong>Parametr 1:</strong> hodnota 1</li>
            <li><strong>Parametr 2:</strong> hodnota 2</li>
            <li><strong>Parametr 3:</strong> hodnota 3</li>
          </ul>
        </div>
      );
    }
  }

  render() {
    const { activeTabId } = this.state;
    console.log('activeTabId', activeTabId);
    console.log('this.state', this.state);

    return (
      <div>
        <div className="jumbotron">
          <h1>Nějaký auto</h1>
        </div>
        <div className="product">
          <ul className="nav nav-tabs">
            <li role="presentation" className={classNames({ active: 0 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 0)}>
                Description
              </a>
            </li>
            <li role="presentation" className={classNames({ active: 1 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 1)}>
                Parameters
              </a>
            </li>
          </ul>

          {this.renderTab(activeTabId)}

        </div>
      </div>
    );
  }
}
