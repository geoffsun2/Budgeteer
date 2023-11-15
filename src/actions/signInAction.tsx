import { redirect } from 'react-router-dom';



const signInAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    username: data.get('username'),
    password: data.get('password'),
  };

  console.log(submission);
  //send post request for auth

  //if valid redirect
  if (submission.username.length < 10) {
    return redirect('/home');
  } else return { error: 'Login failed' };
};

export default signInAction;
