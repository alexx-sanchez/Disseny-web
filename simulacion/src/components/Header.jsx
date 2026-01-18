import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="app-header">
            <nav className="app-nav">
                <ul className="app-nav-list">
                    <li>
                        <Link
                            to="/inici"
                            className={`app-nav-link ${isActive('/inici') ? 'active' : ''}`}
                        >
                            Inici
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/text"
                            className={`app-nav-link ${isActive('/text') ? 'active' : ''}`}
                        >
                            Text
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacte"
                            className={`app-nav-link ${isActive('/contacte') ? 'active' : ''}`}
                        >
                            Contacte
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
