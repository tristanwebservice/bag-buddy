export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start by adding some items to your packing list.</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Ready to go! Everything is packed."
          : `You’ve packed ${numPacked} items. You are ${percentage}% done!`}
      </em>
    </footer>
  );
}
