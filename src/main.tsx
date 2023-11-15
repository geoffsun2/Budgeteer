import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
//Pages
import Dashboard from './pages/Dashboard.tsx';
import SetBudget from './pages/SetBudget.tsx';
import NotFound from './pages/NotFound.tsx';

//Loaders
import dashboardLoader from './loaders/dashboardLoader.tsx'

//Actions
import signInAction from './actions/signInAction.tsx';

//Layouts
import RootLayout from './layouts/RootLayout.tsx';
import HomeLayout from './layouts/HomeLayout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" action={signInAction}>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
      </Route>
      <Route path="home" element={<HomeLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="setbudget" element={<SetBudget />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
