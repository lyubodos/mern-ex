import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route} from "react-router-dom";
import CreateUser from "./components/CreateUser";
import ExerciseList from './components/ExerciseList';
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Route path="/" exact component={ExerciseList}/>
        <Route path="/user" component={CreateUser}/>
      </Router>
    </div>
  );
}

export default App;
