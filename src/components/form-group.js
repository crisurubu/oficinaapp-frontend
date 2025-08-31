import React from "react";
function FormGroup(props){
    return(
        
        <div className="form-group mt-5" style={{position: 'relative', top: '40px'}}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
        
    )

}
export default FormGroup;