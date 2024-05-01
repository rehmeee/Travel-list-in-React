function Item({ item, handleRomveItem, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleRomveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
