import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import "./header.scss";

const Header = () => {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;