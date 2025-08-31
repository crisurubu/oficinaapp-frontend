import axios from "axios"


const httpClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
    }
    

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`;
        return httpClient.post(requestUrl, objeto);
    }   
    get(url){
        const requestUrl = `${this.apiurl}${url}`;
        return httpClient.get(requestUrl, { responseType: "arraybuffer" })
                            .then((response) => {
                            const blob = new Blob([response.data], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            });
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement("a");
                            link.href = url;
                            link.setAttribute("download", "semanal.xlsx");
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                        })
                        .catch(console.error);    ;
                            }

}
export default ApiService;