import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import ExerciseList from './components/ExerciseList';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={ExerciseList}/>

      </Router>
    </div>
  );
}

export default App;
