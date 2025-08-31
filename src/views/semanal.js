import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import SelectMenu from "../components/selectMenu";
import FormularioService from '../app/service/formularioservice'
import * as messages from '../components/toastr'


class Semanal extends React.Component{

    state = {
        operador: '',
        inicio: '',
        fim: ''
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name =  event.target.name;
        this.setState({ [name]: value })

    }
    constructor(){
        super();
        this.service = new FormularioService();
    }

    gerar = () => {
        const lancamentoFiltro = {
            operador: this.state.operador,
            inicio: this.state.inicio,
            fim: this.state.fim
        }
        this.service.consultar(lancamentoFiltro)
            .then(response => {
               
            }).catch(error => {
                        messages.mensagemErro(error.response.data)
                    })
    }
    render(){

        const operadores = this.service.obterListaOperadores();
        return(

            <div className="row col-12  col-md-8 mx-auto" >
                    <div className="col-12 col-md-10" >
                        <div className="bs-docs-section">
                            <Card title="Relatório Semanal" >                               
                                <div className="row">
                                    < div className="col-12 col-mt-6">
                                        <div className="bs-component">
                                            <fieldset className="col-12 col-md-6">
                                                <FormGroup  Label="Operadores: *" htmlFor="inputOperador">
                                                    <SelectMenu id="inputOperador" 
                                                        name="operador"
                                                        value={this.state.operador}
                                                        onChange={this.handleChange}
                                                        lista={operadores} 
                                                        className="form-control" />
                                                </FormGroup>
                                                <FormGroup Label="Data Inicio: *" htmlFor="inputInicio">
                                                    <input value={this.state.inicio}
                                                           onChange={e => this.setState({inicio: e.target.value})}
                                                           type="text"
                                                           className="form-control"
                                                           id="inputInicio"
                                                           placeholder="Digite a data de inicio"/>
                                                </FormGroup>
                                                <FormGroup Label="Data Fim: *" htmlFor="InputFim">
                                                    <input type="text"
                                                           value={this.state.fim}
                                                           onChange={e => this.setState({fim: e.target.value})}
                                                           className="form-control"
                                                           id="InputFim"
                                                           placeholder="Digite a data do fim"/>
                                                </FormGroup>
                                                <button onClick={this.gerar} className="btn btn-success" style={{position: 'relative', top: '70px'}}>Gerar</button>                                                
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                        
        )
    }
}
export default Semanal;