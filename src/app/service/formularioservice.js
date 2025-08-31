import ApiService from '../service/apiservice'


export default class LancamentoService extends ApiService{
    constructor(){
        super('formulario')
    }
    
    obterListaOperadores() {
        return  [
        {label: 'SELECIONE', value: ''},
        {label: 'Cristiano', value: 'Cristiano'},
        {label: 'Juliano', value: 'Juliano'},
        {label: 'Mauricio', value: 'Mauricio'},
        {label: 'Maicon', value: 'Maicon'},
        {label: 'Everton', value: 'Everton'},
        {label: 'Coração', value: 'Coração'},
        {label: 'Célio', value: 'Célio'},
        {label: 'Marcelo', value: 'Marcelo'},
        {label: 'Cláudio', value: 'Cláudio'},
        {label: 'Rampasso', value: 'Rampasso'},
        {label: 'Formigão', value: 'Formigão'},
        {label: 'Vagner', value: 'Vagner'},
        {label: 'Gabriel', value: 'Gabriel'},
        {label: 'Oncinha', value: 'Oncinha'},
        {label: 'Esdras', value: 'Esdras'},
        {label: 'Eduardo', value: 'Eduardo'},
        {label: 'Carlos Eduardo', value: 'Carlos Eduardo'},
        ]

    }

    salvar(lancamento)  {
        return this.post('', lancamento);
    }

    consultar(lancamentoFiltro){
        let params = `?nome=${lancamentoFiltro.operador}`

        if(lancamentoFiltro.inicio){
            params = `${params}&inicio=${lancamentoFiltro.inicio}`
        }

        if(lancamentoFiltro.fim){
            params = `${params}&fim=${lancamentoFiltro.fim}`
        }        

        return this.get(`/semanal-excel${params}`)

    }
 
}