import { Outlet, useActionData } from 'react-router-dom';
import SignInForm from '../utility/SignInForm';

type Data = {
  error?: string;
};
export default function RootLayout() {
  const data = useActionData() as Data;

  return (
    <div>
      <header>
        <nav className="sticky top-0 z-10 flex items-center justify-between border border-solid border-blue-400 bg-blue-500 px-6">
          <h1 className="font-medium">
            <b className="font-bold">Budgeteer</b>
          </h1>
          <SignInForm />
          {data && data.error && <p>{data.error}</p>}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
