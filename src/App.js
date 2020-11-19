import SignUpfrm from './components/SignUpfrm';
import SignInfrm from './components/SignInfrm';
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import AddPoll from "./components/Addpoll";
import Editpoll from "./components/Editpoll";
import PrivateRouting from "./components/PrivateRouting";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
        <Route path="/"   exact  component={
          localStorage.getItem("token") ? Dashboard : SignInfrm
        }/>
        <Route path="/signinfrm" exact component={SignInfrm} />
        <Route path="/signupform" exact component={SignUpfrm} />
        <PrivateRouting path="/dashboard" exact component={Dashboard} />
        <PrivateRouting path="/addpoll" component={AddPoll} />
        <PrivateRouting path="/editpoll/:id" exact component={Editpoll}/>
        </Switch>
     </HashRouter>
    </div>
  );
}

export default App;
