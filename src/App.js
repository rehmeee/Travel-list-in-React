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
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackgingList items={items} handleRomveItem={handleRomveItem} />
      <Stats />
    </div>
  );
}
