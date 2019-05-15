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
        return <nav onMouseLeave={menuClickHandler} className="mainmenu">
            <ul className="mainmenulist">
                <li className="mainmenuitem">Lekcije ١</li>
                <li className="mainmenuitem">Lekcije ٢</li>
                <li className="mainmenuitem">Lekcije ٣</li>
                <li className="mainmenuitem">Lekcije ٤</li>
                <li className="mainmenuitem">Lekcije ٥</li>
            </ul>

            <div className="bottomMenuMain">
            <ul className="bottomMenu">
                <Link to="/lekcija1" className="menulink"><li className="bottommenuitem">Lekcija 1</li></Link>
                <Link to="/lekcija2" className="menulink"><li className="bottommenuitem">Lekcija 2</li></Link>
                <Link to="/lekcija3" className="menulink"><li className="bottommenuitem">Lekcija 3</li></Link>
                <Link to="/lekcija4" className="menulink"><li className="bottommenuitem">Lekcija 4</li></Link>
                <Link to="/lekcija5" className="menulink"><li className="bottommenuitem">Lekcija 5</li></Link>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija6" className="menulink"><li className="bottommenuitem">Lekcija 6</li></Link>
                <Link to="/lekcija7" className="menulink"><li className="bottommenuitem">Lekcija 7</li></Link>
                <Link to="/lekcija8" className="menulink"><li className="bottommenuitem">Lekcija 8</li></Link>
                <Link to="/lekcija9" className="menulink"><li className="bottommenuitem">Lekcija 9</li></Link>
                <Link to="/lekcija10" className="menulink"><li className="bottommenuitem">Lekcija 10</li></Link>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija11" className="menulink"><li className="bottommenuitem">Lekcija 11</li></Link>
                <Link to="/lekcija12" className="menulink"><li className="bottommenuitem">Lekcija 12</li></Link>
                <Link to="/lekcija13" className="menulink"><li className="bottommenuitem">Lekcija 13</li></Link>
                <Link to="/lekcija14" className="menulink"><li className="bottommenuitem">Lekcija 14</li></Link>
                <Link to="/lekcija15" className="menulink"><li className="bottommenuitem">Lekcija 15</li></Link>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija16" className="menulink"><li className="bottommenuitem">Lekcija 16</li></Link>
                <Link to="/lekcija17" className="menulink"><li className="bottommenuitem">Lekcija 17</li></Link>
                <Link to="/lekcija18" className="menulink"><li className="bottommenuitem">Lekcija 18</li></Link>
                <Link to="/lekcija19" className="menulink"><li className="bottommenuitem">Lekcija 19</li></Link>
                <Link to="/lekcija20" className="menulink"><li className="bottommenuitem">Lekcija 20</li></Link>
            </ul>
            <ul className="bottomMenu">
                <Link to="/lekcija21" className="menulink"><li className="bottommenuitem">Lekcija 21</li></Link>
                <Link to="/lekcija22" className="menulink"><li className="bottommenuitem">Lekcija 22</li></Link>
            </ul>
            </div>
        </nav>;
    }
}

export default Header;