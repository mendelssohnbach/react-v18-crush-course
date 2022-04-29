import { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${username}`);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
