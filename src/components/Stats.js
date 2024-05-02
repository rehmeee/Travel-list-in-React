function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Starting adding some items to your packing list 🚀</em>{" "}
      </p>
    );
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got Everything, Ready to go ✈️"
          : `you have ${items.length} items on your list, and you already packed
        ${itemPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
