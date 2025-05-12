import React, { useState } from 'react';

function App() {
  // Задание 1
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, surname, age });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Фамилия:
            <input
              type="text"
              value={surname}
              onChange={handleSurnameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Возраст:
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
          </label>
        </div>
        <button type="submit">Отправить</button>
      </form>

      <div>
        <h3>Введенные данные:</h3>
        <p>Имя: {name}</p>
        <p>Фамилия: {surname}</p>
        <p>Возраст: {age}</p>
      </div>
    </div>
  );
}

export default App;