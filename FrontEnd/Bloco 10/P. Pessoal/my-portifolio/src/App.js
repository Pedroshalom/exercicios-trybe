import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Comments from './pages/Comments';
import Home from './pages/Home';

function App() {
  return (
    <>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
      <li>
        <Link to="/projects">Projetos</Link>
      </li>
      <li>
        <Link to="/comments">Comentários</Link>
      </li>
    </ul>
  </nav>
  <main>
      <Routes>
          <Route exact  path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/comments" element={<Comments/>} />
          </Routes>
          </main>
    </>
  );
}

export default App;
