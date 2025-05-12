import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            Сообщение:
            <textarea
              value={message}
              onChange={handleMessageChange}
              rows="4"
              cols="50"
              placeholder="Введите ваше сообщение..."
            />
          </label>
        </div>
      </form>

      <div>
        <h3>Введенное сообщение:</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;