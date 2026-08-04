import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
      <p className="lead">A modern multi-tier fitness tracking experience.</p>
      <Link className="btn btn-primary mt-3" to="/about">
        Learn more
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h2>About OctoFit</h2>
      <p>Track workouts, manage teams, and stay motivated with a polished app experience.</p>
      <Link className="btn btn-outline-secondary" to="/">
        Back home
      </Link>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
