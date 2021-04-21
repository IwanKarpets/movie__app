import React from 'react';
import './Header.css';
import { FaUser } from 'react-icons/fa';
import Input from '../Input/Input';

const Header = () => {

    return (
        <nav className="header">
            <div className="header__block">
                <div className="search">
                <h1>
                    <a href="/">Movie Catalog</a>
                </h1>
                <Input/>
                </div>
                <div className="user">
                    <FaUser className="user__icon"/>
                    <h5 className="user__name">Alexander Borisenko</h5>
                </div>
            </div>
        </nav>
    )
}

export default Header;
