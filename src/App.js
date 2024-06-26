import Form from "./components/Form";
import Logo from "./components/Logo";
import PackgingList from "./components/PackgingList";
import Stats from "./components/Stats";
import { useState } from "react";

export default function App() {
  // this is lefted state that we use to get items from the form component
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleRomveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleSetItems() {
    if (!items.length) return;
    const confirme = window.confirm(
      "Are you sure you want to delete this list?"
    );

    if (confirme) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackgingList
        items={items}
        handleRomveItem={handleRomveItem}
        handleToggleItem={handleToggleItem}
        handleSetItems={handleSetItems}
      />
      <Stats items={items} />
    </div>
  );
}
