import React from "react";
import NavbarItem from "./navbaritem";
import '../components/css/estilo.css'


function NavBar(props){
     return(
        <nav className="navbar navbar-expand-sm navbar-light fixed-top navbar-transparente">
        <div className="container">          
          <a href="/" className="navbar-brand">Tarefas Diárias Oficina de Protótipos</a>
          <button className="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <NavbarItem href="/" label="Formulário"/>
              <NavbarItem href="/semanal" label="Semanal"/>                            
            </ul>
          </div>

        </div>
      </nav>
    )

}
export default NavBar;