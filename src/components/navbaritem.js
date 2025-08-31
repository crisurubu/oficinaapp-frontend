import React from "react";

function NavbarItem({...props}){
  
        return(
            <li className="navbar-item">
                <a onClick={props.onClick} className="navbar-link" href={props.href}>{props.label}</a>
            </li>
        )
   
}
export default NavbarItem;