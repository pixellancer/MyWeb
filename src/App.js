import './App.css';
import { Route, BrowserRouter as Router, Switch,Redirect } from 'react-router-dom'
import { Home } from './components/home/Home';
import { Navbar } from './components/navigation/Navbar';
import { Work } from './components/work/Work';
import { Resume } from './components/resume/Resume';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/work'>
            <Work></Work>
          </Route>
          <Route exact path='/resume'>
            <Resume></Resume>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
