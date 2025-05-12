import React, { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    setMessage(e.target.checked ? 'Чекбокс отмечен' : 'Чекбокс не отмечен');
  };

  return (
    <div>
      <form>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            Отметьте меня
          </label>
        </div>
      </form>

      <div>
        <h3>Статус чекбокса:</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;