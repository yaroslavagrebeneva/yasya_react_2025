import React, { useState } from 'react';

function Greeting({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return <h2>Добро пожаловать, {username}!</h2>;
  }
  return <h2>Пожалуйста, войдите в систему</h2>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername('Иван');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} username={username} />
      {isLoggedIn ? (
        <button onClick={handleLogout}>Выйти</button>
      ) : (
        <button onClick={handleLogin}>Войти</button>
      )}
    </div>
  );
}

export default App;