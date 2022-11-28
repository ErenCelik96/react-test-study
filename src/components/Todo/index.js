import React from "react";

const defaultItems = [
  { name: "Item a" },
  { name: "Item b" },
  { name: "Item c" },
];

function Todo() {
  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState(defaultItems);

  const addItem = () => {
    setItems([...items, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>
      <br />
      {items?.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
