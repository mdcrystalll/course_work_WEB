import React from 'react';
import './header.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import User from './User';

const nav = [
  { id: 1, url: '/home', text: 'Home' },
  { id: 2, url: '/about', text: 'About' },
  { id: 3, url: '/contact', text: 'Contact' },
  {id: 4, url: '/news', text: 'News'},
];

export const Header = () => {
  return (
    <>
      <header>
        <div className="scontainer flex">
          <div className="logo">
            <img src={logo} alt="logo" width="100px" />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;