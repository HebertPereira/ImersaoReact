import React from 'react'
//import ButtonLink from '../navbar/navbar.css'

 function ButtonLink(props) {
    return(
        <a href={props.href} className={props.className}> 
            Novo video
        </a>
    )
}

export default ButtonLink;