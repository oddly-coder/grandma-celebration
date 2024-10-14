import { Logo } from "../logo";
import { useLocation } from 'react-router-dom';



export function Header() {
    const location = useLocation();
    
    return (<header className="header-section">
        <div className="container">
            {/* <Logo /> */}
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                    <ul>
                        <li className={location.pathname == "/" ? "active" : ""}><a href="/">Home</a></li>
                        <li className={location.pathname == "/biography" ? "active" : ""}><a href="/biography">Biography</a></li>
                        <li className={location.pathname == "/goodwill-messages" ? "active" : ""}><a href="/goodwill-messages">Goodwill Messages</a>
                            {/* <ul className="dropdown">
                                <li><a href="#">Jayden</a></li>
                                <li><a href="#">Sara</a></li>
                                <li><a href="#">Emma</a></li>
                                <li><a href="#">Harriet</a></li>
                            </ul> */}
                        </li>
                        <li className={location.pathname == "/programme" ? "active" : ""}><a href="/programme">Programme</a></li>
                        <li className={location.pathname == "/gallery" ? "active" : ""}><a href="/gallery">Gallery</a></li>
                        {/* <li><a href="./contact.html">Contacts</a></li> */}
                    </ul>
                </nav>
                {/* <a href="#" className="primary-btn top-btn"><i className="fa fa-ticket"></i> Ticket</a> */}
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>)
}