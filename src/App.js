import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeamPage from "./pages/TeamPage";


function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={TeamPage}/>
    </div>
    </Router>
  );
}

export default App;
