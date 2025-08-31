import React from "react";
import { Route, Routes} from "react-router-dom";
import Formulario from "../views/formulario";
import Semanal from "../views/semanal";
function Rotas(){
    return(
       
        <Routes>
            <Route path="/" Component={Formulario} />
            <Route path="/semanal" Component={Semanal}/>
        </Routes>
        
    )
}
export default Rotas;