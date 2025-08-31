export default class LocalStorageService {
    
    static adicionarItem(chave, valor){
        localStorage.setItem(chave, JSON.stringify(valor));
    }
   

}