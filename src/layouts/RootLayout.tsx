import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>NavBar</h1>
          <NavLink to ='/'>Home</NavLink>
          <NavLink to ='/home'>Dashboard</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
