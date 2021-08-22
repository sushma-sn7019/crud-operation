
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Create from './Container/Form';
import Read from './Container/Read';
import Update from './Container/Update';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
    <Header/><br/>
      <Switch>
        <Route path="/" component={Create} exact></Route>
        <Route path="/form" component={Create} exact></Route>
        <Route path="/read" component={Read} exact></Route>
        <Route path="/update" component={Update} exact></Route>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
