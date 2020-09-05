import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './features/home/Home';
import Axios from 'axios';
import 'rsuite/dist/styles/rsuite-default.css';
import SideNav from './features/sideNav/SideNav';
import { useDispatch } from 'react-redux';
import { fetchTrending } from './.utils'
import { fetchVideosSuccess } from './features/videos/videoSlice';
import VideoListFrame from './features/videos/VideoListFrame';
import {Loader} from 'rsuite';
import SearchVideoListFrame from './features/videos/SearchVideoListFrame';
import VideoDetailFrame from './features/videos/VideoDetailFrame';
import SearchVideoDetailFrame from './features/videos/SearchVideoDetailFrame';

function App() {

  const [ pending, setPending ] = useState(false);
  const url = fetchTrending();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setPending(true);
    try {
      const res = await Axios.get(url);
      dispatch(fetchVideosSuccess(res.data));
      setPending(false);
    }catch {
      setPending(false);
    }
}

  return (
    <Router>
      <div className="MainFrame">
        <SideNav />
          <div className="App mx-2">
            <Switch>
              <Route exact path="/"
                render={() => (
                  <React.Fragment>
                    { pending ? <Loader id="loader"/> : <Home /> }
                  </React.Fragment>
                )}
              />
              <Route exact path="/videoList/:category/:subCat" component={VideoListFrame} />
              <Route exact path="/searchVideoList/:searchTerm" component={SearchVideoListFrame} />
              <Route exaxt path="/videoDetail/:videoName" component={VideoDetailFrame} />
              <Route exact path="/search/videoDetail/:videoName" component={SearchVideoDetailFrame} />
              <Redirect to="/" />
            </Switch>
          </div>
      </div>
    </Router>
  )
}

export default App;