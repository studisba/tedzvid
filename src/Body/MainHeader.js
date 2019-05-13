import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <nav className="mainmenu">
        <ul className="mainmenulist">
        <li className="mainmenuitem"><Link to="/lekcija1" className="text-white">Lekcije ١</Link></li>
        <li className="mainmenuitem">Lekcije ٢</li>
        <li className="mainmenuitem">Lekcije ٣</li>
        <li className="mainmenuitem">Lekcije ٤</li>
        <li className="mainmenuitem">Lekcije ٥</li>
        </ul>
    </nav>;
}

export default Header;