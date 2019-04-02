import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './AppMenu.css';

export default function AppMenu() {

    return (
        <Menu disableAutoFocus>
            <a key="home" href="/"><FontAwesomeIcon icon={faAddressBook} /><span>Home</span></a>
            <a key="services" className="menu-item" href="/services">Services</a>
            <a id="contact" className="menu-item" href="/pricing">Pricing</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    );
}
