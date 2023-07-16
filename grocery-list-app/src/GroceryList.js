import React, { Component } from 'react';

class GroceryList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    // Make API request to fetch grocery items
    // Update the state with the fetched items
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Grocery List</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GroceryList;
