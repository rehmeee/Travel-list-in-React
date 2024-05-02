import React from "react";
import Item from "./Item";
import { useState } from "react";
function PackgingList({
  items,
  handleRomveItem,
  handleToggleItem,
  handleSetItems,
}) {
  const [SortBy, setSortBy] = useState("input");
  let sortedItems;
  if (SortBy === "input") sortedItems = items;
  if (SortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (SortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleRomveItem={handleRomveItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={SortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => handleSetItems()}>Clear List</button>
      </div>
    </div>
  );
}

export default PackgingList;
