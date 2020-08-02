import React from 'react'
//import ButtonLink from '../navbar/navbar.css'

 function ButtonLink(props) {
    console.log(props)
    return(
        <a href={props.href} className={props.className}> 
            {props.children}
        </a>
    )
}

export default ButtonLink;