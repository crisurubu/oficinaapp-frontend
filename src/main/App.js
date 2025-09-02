import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar';
import Rotas from './rotas';
import 'bootswatch/dist/cerulean/bootstrap.css'
import 'toastr/build/toastr.min.js'
import 'toastr/build/toastr.css'
import '../custom.css'

function App() {
  return (
    <BrowserRouter basename='/'>
      <NavBar/>
        <div className="App">      
          <Rotas/>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
