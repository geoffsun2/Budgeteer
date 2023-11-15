import { Outlet } from 'react-router-dom';
import SignInForm from '../utility/SignInForm'

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav className="sticky top-0 z-10 flex items-center justify-between border border-solid border-blue-400 bg-blue-500 px-6">
          <h1 className="font-medium">
            <b className="font-bold">Budgeteer</b>
          </h1>
          <SignInForm />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
