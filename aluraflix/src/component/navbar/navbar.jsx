import React from 'react';
import './navbar.css'
import Logo from '../../assets/imagens/HomeFlix.png'
import Button from '../button/index.js';


function Navbar() {
    return(
        <>
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}  alt="HomeFlix logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
        </>
    )
}
export default Navbar;