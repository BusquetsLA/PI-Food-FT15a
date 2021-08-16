import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create'
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
       <Route exact path='/home' component={Home}/>
       <Route path='/detail/:id' component={Detail} />
       <Route exact path='/createRecipe' component={Create}/>
    </div>
  );
}

export default App;
