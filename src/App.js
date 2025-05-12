import React from 'react';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const handleClick = () => {
    alert('Кнопка нажата!');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Нажми меня
      </Button>
    </div>
  );
}

export default App;