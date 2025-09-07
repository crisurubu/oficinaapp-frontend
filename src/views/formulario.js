import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import SelectMenu from "../components/selectMenu";
import FormularioService from "../app/service/formularioservice"
import * as messages from '../components/toastr'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class Formulario extends React.Component {
    
    state = {
        id: null,
        data: '',
        veiculo: '',
        projeto: '',
        inicio: '',
        fim: '',
        descricao: '',
        operador: '',
       

    }
    constructor(){
        super();        
        this.service = new FormularioService();
         
    }

    

    handleChange = (event) => {       
        const value = event.target.value;
        const name = event.target.name;            
        this.setState({ [name]: value })
        

    }

    handleDateChange = (date) => {
        if (date) {
            // transforma o Date em string no formato yyyy-MM-dd
            const dataFormatada = date.toISOString().split('T')[0];
            this.setState({ data: dataFormatada });
        } else {
            this.setState({ data: '' });
        }
    };

    

    submit = (e) => {
        e.preventDefault();
        const {data, veiculo, projeto, inicio, fim, descricao, operador } = this.state;
        const lancar = { data, veiculo, projeto, inicio, fim, descricao, operador };
        console.log(lancar);

       this.service.salvar(lancar).then(response =>{
            console.log(response.data)
            messages.mensagemSucesso('Tarefa salva com sucesso!')
            this.setState({
                data: null,
                veiculo: '',
                projeto: '',
                inicio: '',
                fim: '',
                descricao: '',
                operador: '',
            });
        }).catch(error => {
            messages.mensagemErro(error.response.data)
        })
    }

    render() {
       

    
        const operadores = this.service.obterListaOperadores();
        

        return (
            
            <Card title="Formulário Cadastro Tarefas">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <FormGroup id="inputData" label="Data: *">
                            <DatePicker
                                className="form-control" 
                                id="inputData"
                                name="data"                    
                                selected={this.state.data ? new Date(this.state.data) : null}
                                onChange={this.handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Selecione a data:"/> 
                        </FormGroup>
                                                
                    </div>
                </div>     
                <div className="row">
                    <div className="col-12 col-md-6">
                        <FormGroup id="inputOperador" label="Operador: *">
                            <SelectMenu id="inputOperador" 
                                        name="operador"
                                        value={this.state.operador}
                                        onChange={this.handleChange}
                                        lista={operadores} 
                                        className="form-control" />
                        </FormGroup>
                    </div>                    
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <FormGroup id="inputVeiculo" label="Veículo: *">
                            <input id="inputVeiculo"
                                type="text"
                                className="form-control"
                                name="veiculo"
                                value={this.state.veiculo}
                                onChange={this.handleChange} />
                        </FormGroup>
                    </div>

                    <div className="col-12 col-md-6">
                        <FormGroup id="inputProjeto" label="Projeto: *" >
                            <input id="inputProjeto"
                                type="text"
                                className="form-control"
                                name="projeto"
                                value={this.state.projeto}
                                onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <FormGroup id="inputInicio" label="Início: *">
                            <input id="inputInicio"
                                name="inicio"
                                value={this.state.inicio}
                                onChange={this.handleChange}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>

                    <div className="col-12 col-md-4">
                        <FormGroup id="inputFim" label="Fim: *" >
                            <input id="inputFim"
                                name="fim"
                                value={this.state.fim}
                                onChange={this.handleChange}
                                className="form-control" />
                        </FormGroup>
                    </div>                    
                </div>
                <div className="col-12 col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input
                                id="inputDescricao" 
                                type="text"
                                name="descricao"
                                value={this.state.descricao}
                                onChange={this.handleChange}
                                className="form-control"
                            />
                        </FormGroup>
                    </div>

              
                    <div className="col-12 col-md-6" style={{position: 'relative', top: '70px', left: '30px'}}>
                        <button type="button" onClick={this.submit} className="btn btn-success"><i className="pi pi-save"></i> Salvar</button>
                        <button type="button" className="btn btn-danger"><i className="pi pi-times"></i> Cancelar</button>
                    </div>              
            </Card>
            
        )

    }
}
export default Formulario;