import React from 'react';
import './item-add-form.css';

const ItemAddForm = (props) => {
  return (
    <div className="item-add-form">
        <button onClick={() => props.onAdd('Some text...')} className="btn btn-outline-secondary">Add item</button>
      </div>
  );
};

export default ItemAddForm;
