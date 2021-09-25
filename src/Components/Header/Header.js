import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order review">Order Review</a>
                <a href="/manage inventory here">Manage Inventory here</a>
            </nav>
        </div>
        </div>
    );
};

export default Header;