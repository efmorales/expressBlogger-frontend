import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/blogs" element={< Blogs /> } />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
