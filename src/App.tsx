import React, {CSSProperties} from 'react';
import './App.css';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
// import PoaSystem from './components/POA_system/poa_system';
import { HowTo } from './components/POA_system/howto';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MajorSystem from './components/POA_system/majorSystem';
import DominicanSystem from './components/POA_system/dominicanSystem';
// import PoaSystem from './components/POA_system/poasystem';
import PoaList from './components/POA_system/poaList';
import PoaGame from './components/POA_system/poaGame';


function App() {
  return (
    <Router>
    <div>
      <Topbar />
      <Sidebar />
        <Switch>
          <Route path='/majorSystem'> 
            <span style={container}> <MajorSystem /> </span>
          </Route>

          <Route path='/POA_list'>
            <span style={container}>
              <PoaList />
            </span>
          </Route>

          <Route path='/POA_game'>
            <span style={container}>
              <PoaGame />
            </span>
          </Route>

          <Route path='/DominicanSystem'>
            <span style={container}> <DominicanSystem /> </span>
          </Route>

          {/* <Route path='/POA_system'>
            <span style={container}>
              <PoaSystem />
              <PoaGame />
            </span>
          </Route> */}

        </Switch>
        <HowTo />
        {/* <PoaSystem /> */}
    </div>
    </Router>
  );
}

export default App;

const container = {
  display: 'inline-block',
  width: '75vw',
  verticalAlign: 'top',
  boxSizing: 'border-box',
  marginBottom: 50,
  paddingLeft: 20
} as CSSProperties