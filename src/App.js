import { BrowserRouter as Router, Route } from 'react-router-dom'
import { employees } from './data';
import EmployeePage from './pages/EmployeePage';
import TeamPage from "./pages/TeamPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={TeamPage}/>
        <Route path="/employee/:employeeID" render={() => <EmployeePage employees={employees} />} />
      </div>
    </Router>
  );
}

export default App;
