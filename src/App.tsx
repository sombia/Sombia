import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./pages/Layout'));
import Login from './pages/Login';
import './styles/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/poppins";
import Register from './pages/Register';
import ScreenLoader from './components/ScreenLoader';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/*" element={<Suspense fallback={<ScreenLoader />}><Layout /></Suspense>}>
            {/* Add application routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
