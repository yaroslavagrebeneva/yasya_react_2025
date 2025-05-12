import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{user.name}</h3>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Город: {user.city}</p>
    </div>
  );
}

function App() {
  const users = [
    {
      id: 1,
      name: 'Иван Иванов',
      age: 25,
      email: 'ivan@example.com',
      city: 'Москва'
    },
    {
      id: 2,
      name: 'Петр Петров',
      age: 30,
      email: 'petr@example.com',
      city: 'Санкт-Петербург'
    },
    {
      id: 3,
      name: 'Анна Сидорова',
      age: 28,
      email: 'anna@example.com',
      city: 'Казань'
    }
  ];

  return (
    <div>
      <h2>Список пользователей:</h2>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;