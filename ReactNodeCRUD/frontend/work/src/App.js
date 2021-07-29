import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Insertform from './Insertform';
import Fetchdata from './Fetchdata';
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Editform from './Editform';

function App() {
  return (
    <div className="App">
      {/* <Insertform /> */}
    
    <BrowserRouter>
      <Switch>
        {/* <Fetchdata /> */}
        <Route exact path="/" component={Insertform}/>
        <Route exact path="/edit/:id" component={Editform}/>

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
