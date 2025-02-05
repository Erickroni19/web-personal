import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { Navbar } from "./components/Navbar/Navbar.jsx";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="experience" element={<h1>experience</h1>} />
        <Route path="projects" element={<h1>Home</h1>} />
        <Route path="skills" element={<h1>Home</h1>} />
        <Route path="about-me" element={<h1>Home</h1>} />
        <Route path="contact" element={<h1>Home</h1>} />
        <Route path="/*" element={ <Navigate  to="/" /> } />
      </Routes>
    </>
  )
}

export default App
