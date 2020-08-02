import React from 'react';
import './navbar.css'
import Logo from '../../assets/imagens/HomeFlix.png'
import ButtonLink from '../buttons/buttonLink';


function Navbar() {
    return(
        <>
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}  alt="HomeFlix logo"></img>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
        </nav>
        </>
    )
}
export default Navbar;