import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddItem(event) {
    event.preventDefault()
    const itemIds = items.map((item) => item.id)
    const newId = Math.max(itemIds) + 1
    const newItem = { id: newId, name: newItemName, category: newItemCategory }
    const newItems = [...items, newItem]
    setItems(newItems)
    setNewItemName("")
    setNewItemCategory("")
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} setNewItemName={setNewItemName} setNewItemCategory={setNewItemCategory} handleAddItem={handleAddItem} newItemCategory={newItemCategory} newItemName={newItemName} />
    </div>
  );
}

export default App;