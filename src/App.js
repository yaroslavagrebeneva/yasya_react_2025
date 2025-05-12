import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Фамилия:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Возраст:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Телефон:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </form>

      <div>
        <h3>Введенные данные:</h3>
        <p>Имя: {formData.name}</p>
        <p>Фамилия: {formData.surname}</p>
        <p>Возраст: {formData.age}</p>
        <p>Email: {formData.email}</p>
        <p>Телефон: {formData.phone}</p>
      </div>
    </div>
  );
}

export default App;