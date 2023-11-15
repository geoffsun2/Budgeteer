import { Form } from 'react-router-dom';

export default function SignInForm() {

  return (
    <Form method='post' action='/'>
      <label>
        Username:
        <input name='username' autoComplete='username' type="text"  />
      </label>
      <label>
        Password:
        <input name='password' type="password" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
}
