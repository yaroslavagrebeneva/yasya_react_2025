import React from 'react';

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const items = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5'];

  return (
    <div>
      <h2>Список элементов:</h2>
      <List items={items} />
    </div>
  );
}

export default App;