import logo from './logo.svg';
import { NavBar } from './components';
import { HomePage } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
