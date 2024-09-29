import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className='Nav-bar'>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
