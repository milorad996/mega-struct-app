import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './../css/navbar.css';

function NavbarComponent() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className='header-container'>
            <nav className='header-nav'>
                <div className='navbar-logo' onClick={() => navigate('/')}>MegaStruct</div>

                <div className='menu-icon' onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link to="/contact" className='contact-link' onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarComponent;
