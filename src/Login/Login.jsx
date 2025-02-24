import './Login.css';
import { useState } from 'react';

function Login({onLogin}) {
  const [user, setUser] = useState('');
  const [pin, setPin] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(user, pin);
  };
  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        maxLength="4"
        className="login__input login__input--pin"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />

      <button className="login__btn" onClick={handleLogin}>&rarr;</button>
    </form>
  );
}

export default Login;