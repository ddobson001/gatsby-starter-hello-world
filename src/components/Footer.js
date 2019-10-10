import React from 'react';
import footerStyles from './Footer.module.css';

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container">
    <span className='text-muted'> © David Dobson 2019</span>
        </div>
    </footer>
);

export default Footer;
