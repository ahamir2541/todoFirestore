import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AddSection from './Components/AddSection'
import EditSection from './Components/EditSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add' component={AddSection} />
        <Route path='/edit/:id' component={EditSection} />
      </Switch>
    </div>
  );
};

export default App;