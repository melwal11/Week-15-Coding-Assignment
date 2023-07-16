import React from 'react';
import GroceryList from './GroceryList';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import DeleteItemButton from './DeleteItemButton';

const App = () => {
  return (
    <div>
      <GroceryList />
      <AddItemForm />
      <EditItemForm />
      <DeleteItemButton />
    </div>
  );
};

export default App;
