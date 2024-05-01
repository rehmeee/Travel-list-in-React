import React from "react";
import Item from "./Item";

function PackgingList({ items, handleRomveItem }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} handleRomveItem={handleRomveItem} />
        ))}
      </ul>
    </div>
  );
}

export default PackgingList;
