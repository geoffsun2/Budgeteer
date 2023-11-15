import { NavLink, Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <div>
      <header>
        <nav className="sticky top-0 z-10 flex items-center justify-between border border-solid border-blue-400 bg-blue-500 px-6">
          <h1 className="font-medium">
            <b className="font-bold">Budgeteer</b>
          </h1>
          <div className="ml-auto hidden items-center gap-4 pr-4 sm:flex ">
            <NavLink to="/" className="duration-200 hover:text-white">
              Home
            </NavLink>
            <NavLink to="/home" className="duration-200 hover:text-white">
              Dashboard
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
