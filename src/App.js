import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './features/home/Home';

// https://reactrouter.com/web/api

import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import SideNav from './features/sideNav/SideNav';
import VideoList from './features/videos/VideoList';

function App() {

  return (
    <Router>
      <div className="MainFrame">
      <SideNav/>
        <div className="App">
        <Switch>
          <Route exact path="/"
            render={() => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route exact path="/viralVideo" component={VideoList} />
          {/* <Route exact path="/editPost/:postId" component={EditPostForm} /> */}
          <Redirect to="/" />
        </Switch>
    </div>
      
      </div>
    </Router>
  )
}

export default App;