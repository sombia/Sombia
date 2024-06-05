import Layout from './pages/Layout';
import Login from './pages/Login';
import './styles/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/poppins";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {/* Add application routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
