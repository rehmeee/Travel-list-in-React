import React from "react";
import Item from "./Item";

function PackgingList({ items, handleRomveItem, handleToggleItem }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleRomveItem={handleRomveItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackgingList;
