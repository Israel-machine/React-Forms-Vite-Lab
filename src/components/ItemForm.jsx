import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const { setNewItemName, setNewItemCategory, handleAddItem, newItemName, newItemCategory } = props;
  return (
    <form className="NewItem" onSubmit={handleAddItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setNewItemName(e.target.value)} value={newItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setNewItemCategory(e.target.value)} value={newItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;