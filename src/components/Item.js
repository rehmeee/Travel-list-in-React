import { useState } from "react";
function Item({ item, handleRomveItem }) {
  const [checkbox, setCheckbox] = useState(false);
  function handleCheck() {
    setCheckbox((prev) => (prev = !prev));
  }

  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        checked={checkbox}
        onChange={handleCheck}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleRomveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
