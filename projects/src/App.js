import { Route, Switch } from "react-router";
import Men from "./components/men";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/men' component={Men}/>
      </Switch>
     
    </div>
  );
}

export default App;
