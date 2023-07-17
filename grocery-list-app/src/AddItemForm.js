import React, { Component } from 'react';

class AddItemForm extends Component {
  state = {
    name: '',
    quantity: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, quantity } = this.state;
    
    // Make API request to create a new grocery item
    fetch('http://localhost:8000/groceryItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, quantity })
    })
    .then(response => response.json())
    .then(newItem => {
      // Clear the form fields and update the grocery list state
      this.setState({ name: '', quantity: '' });
      // Call a function or update the state in the parent component to reflect the newly added item
    })
    .catch(error => {
      // Handle any error that occurred during the API request
      console.error('Error adding item:', error);
    });
  };

  render() {
    const { name, quantity } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Item name"
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={this.handleChange}
          placeholder="Quantity"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItemForm;
