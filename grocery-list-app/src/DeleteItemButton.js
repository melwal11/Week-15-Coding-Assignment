import React from 'react';

const DeleteItemButton = ({ itemId }) => {
  const handleDelete = () => {
    // Make API request to delete the selected grocery item
    // Update the grocery list
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteItemButton;
