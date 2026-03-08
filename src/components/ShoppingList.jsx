import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleAddItem, setNewItemName, setNewItemCategory, newItemName, newItemCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemSearch(event) {
    setSearchTerm(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm handleAddItem={handleAddItem} setNewItemCategory={setNewItemCategory} setNewItemName={setNewItemName} newItemCategory={newItemCategory} newItemName={newItemName} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onItemSearch} search={searchTerm} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;