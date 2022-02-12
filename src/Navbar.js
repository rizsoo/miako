import { Link } from 'react-router-dom';
import './Header.css';

function Navbar () {
    return (
            <ul className='navbar-list'>
                <li><Link to="/">Főoldal</Link></li>
                <li><Link to="/menu">Menü</Link></li>
                <li><Link to="/about">Bemutatkozás</Link></li>
            </ul>
    )
}
export default Navbar;