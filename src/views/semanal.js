import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import SelectMenu from "../components/selectMenu";
import FormularioService from '../app/service/formularioservice';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import * as messages from '../components/toastr';


class Semanal extends React.Component{

    state = {
        operador: '',
        inicio: '',
        fim: ''
    }

 
    constructor(){
        super();
        this.service = new FormularioService();
    }

    
    handleChange = (event) => {
        const value = event.target.value;
        const name =  event.target.name;
        this.setState({ [name]: value })

    }

    handleInicioChange = (inicio) => {
        if (inicio) {
            const inicioFormatado = inicio.toISOString().split('T')[0];
            this.setState({ inicio: inicioFormatado });
        } else {
            this.setState({ inicio: '' });
        }
    }

    handleFimChange = (fim) => {
        if (fim) {
            const fimFormatado = fim.toISOString().split('T')[0];
            this.setState({ fim: fimFormatado });
        } else {
            this.setState({ fim: '' });
        }
    }



    gerar = () => {
        const lancamentoFiltro = {
            operador: this.state.operador,
            inicio: this.state.inicio,
            fim: this.state.fim
        }
        this.service.consultar(lancamentoFiltro)
            .then(response => {
                messages.mensagemSucesso("Consulta Semanal realizada com sucesso! Aguarde download na barra do navegador.")
               
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
                                                    <DatePicker
                                                        className="form-control"
                                                        id="inputInicio"
                                                        selected={this.state.inicio ? new Date(this.state.inicio) : null}
                                                        onChange={this.handleInicioChange}                                                           
                                                        placeholderText="Selecione a data de inicio"
                                                        dateFormat="yyyy-MM-dd"/>
                                                </FormGroup>
                                                <FormGroup Label="Data Fim: *" htmlFor="InputFim">
                                                   <DatePicker
                                                        className="form-control"
                                                        id="inputFim"
                                                        selected={this.state.fim ? new Date(this.state.fim) : null}
                                                        onChange={this.handleFimChange}                                                           
                                                        placeholderText="Selecione a data final"
                                                        dateFormat="yyyy-MM-dd"/>
                                                        
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