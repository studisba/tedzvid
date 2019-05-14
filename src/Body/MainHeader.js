import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [opened, menuOpen] = useState(false);

    const menuClickHandler = () => {
        return menuOpen(!opened);
    }

    if (!opened) {
        return <nav onClick={menuClickHandler} className="mainmenu">
            <ul className="mainmenulist">
            <li className="mainmenuitem">Lekcije ١</li>
            <li className="mainmenuitem">Lekcije ٢</li>
            <li className="mainmenuitem">Lekcije ٣</li>
            <li className="mainmenuitem">Lekcije ٤</li>
            <li className="mainmenuitem">Lekcije ٥</li>
            </ul>
        </nav>;
    } if (opened) {
        return <nav onClick={menuClickHandler} className="mainmenu">
            <ul className="mainmenulist">
                <li className="mainmenuitem">Lekcije ١</li>
                <li className="mainmenuitem">Lekcije ٢</li>
                <li className="mainmenuitem">Lekcije ٣</li>
                <li className="mainmenuitem">Lekcije ٤</li>
                <li className="mainmenuitem">Lekcije ٥</li>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija1" className="text-white"><li className="bottommenuitem">Lekcija 1</li></Link>
                <Link to="/lekcija6" className="text-white"><li className="bottommenuitem">Lekcija 6</li></Link>
                <li className="bottommenuitem">Lekcija 11</li>
                <li className="bottommenuitem">Lekcija 16</li>
                <li className="bottommenuitem">Lekcija 21</li>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija2" className="text-white"><li className="bottommenuitem">Lekcija 2</li></Link>
                <Link to="/lekcija7" className="text-white"><li className="bottommenuitem">Lekcija 7</li></Link>
                <li className="bottommenuitem">Lekcija 12</li>
                <li className="bottommenuitem">Lekcija 17</li>
                <li className="bottommenuitem">Lekcija 22</li>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija3" className="text-white"><li className="bottommenuitem">Lekcija 3</li></Link>
                <Link to="/lekcija8" className="text-white"><li className="bottommenuitem">Lekcija 8</li></Link>
                <li className="bottommenuitem">Lekcija 13</li>
                <li className="bottommenuitem">Lekcija 18</li>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija4" className="text-white"><li className="bottommenuitem">Lekcija 4</li></Link>
                <Link to="/lekcija9" className="text-white"><li className="bottommenuitem">Lekcija 9</li></Link>
                <li className="bottommenuitem">Lekcija 14</li>
                <li className="bottommenuitem">Lekcija 19</li>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija5" className="text-white"><li className="bottommenuitem">Lekcija 5</li></Link>
                <Link to="/lekcija10" className="text-white"><li className="bottommenuitem">Lekcija 10</li></Link>
                <li className="bottommenuitem">Lekcija 15</li>
                <li className="bottommenuitem">Lekcija 20</li>
            </ul>
        </nav>;
    }
}

export default Header;