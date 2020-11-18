import Signup from './components/Signup';
import Login from './components/Login';
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
           <Route path="/" exact component ={Login}/>
           <Route path="/Signup" exact component ={Signup}/>
        </Switch>
     </HashRouter>
    </div>
  );
}

export default App;
