import React from "react";
import Item from "./Item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "pants", quantity: 4, packed: false },
];

function PackgingList({ items }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackgingList;
