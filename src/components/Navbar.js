// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#eee" }}>
    <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/settings">Settings</Link>
  </nav>
);
export default Navbar;
