import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';
import './App.scss';

function App() {
  return (
  <Router>
    <Switch>

      <Route exact path='/:id'>
        <CallPage />
      </Route>

      <Route exact path='/random'>
        <NoMatch />
      </Route>

      <Route exact path='/'>
        <HomePage />
      </Route>

      <Route path='*'>
        <NoMatch />
      </Route>

    </Switch>
  </Router>
    
  );
}

export default App;
