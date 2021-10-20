import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import CreateExercise from "./components/CreateExercise";
import ExerciseList from "./components/ExerciseList"
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Route path="/" exact component={ExerciseList}/>
        <Route path="/user" component={CreateUser}/>
        <Route path="/create" component={CreateExercise}/>
      </Router>
    </div>
  );
}

export default App;
