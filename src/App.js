import React, { useState } from 'react';

function UserInfo({ name, age, city }) {
  return (
    <div>
      <h3>Информация о пользователе:</h3>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </div>
  );
}

function App() {
  const [userData, setUserData] = useState({
    name: 'Иван',
    age: 25,
    city: 'Москва'
  });

  return (
    <div>
      <UserInfo 
        name={userData.name}
        age={userData.age}
        city={userData.city}
      />
    </div>
  );
}

export default App;