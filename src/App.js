import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import {NoMatch} from './Components/NoMatch';
import {Layout } from './Components/Layout';
import {NavigatorBar} from './Components/Navbar';
import {Jumbotron} from './Components/Jumbotron';
import './App.css'

function App() {
  return (
    <React.Fragment>
      <NavigatorBar />

      <div className="layout">
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
      </div>
    </React.Fragment>
  );
}

export default App;
