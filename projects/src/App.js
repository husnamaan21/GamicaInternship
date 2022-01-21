import { Route, Switch } from "react-router";
import Men from "./components/men";
import Navbar from "./components/navbar";
import Women from "./components/women";
import Kids from "./components/kids";
import Home from "./components/home";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route path='/men' component={Men}/>
        <Route path='/women' component={Women}/>
        <Route path='/kids' component={Kids}/>
      </Switch>
     
    </div>
  );
}

export default App;
