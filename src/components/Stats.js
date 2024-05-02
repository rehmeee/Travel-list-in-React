function Stats({ items }) {
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        you have {items.length} items on your list, and you already packed{" "}
        {itemPacked}({percentage}%)
      </em>
    </footer>
  );
}

export default Stats;
