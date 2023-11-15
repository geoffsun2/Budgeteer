import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit: ClickEventHandler = () => {
    navigate('/home');
  };
  const handleChange: ChangeEventHandler = (e) => {
    setName(e.target.value);
  };
  const passChange: ChangeEventHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={passChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
