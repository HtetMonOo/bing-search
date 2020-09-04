import React, { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './features/home/Home';
import Axios from 'axios';

// https://reactrouter.com/web/api

import 'rsuite/dist/styles/rsuite-default.css';
import SideNav from './features/sideNav/SideNav';
import VideoList from './features/videos/VideoList';
import VideoDetail from './features/videos/VideoDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending } from './.utils'
import { getVideosError, getVideos, getVideosPending } from './features/videos/videoSlice';
import store from './app/store';
import {fetchVideosPending, fetchVideosSuccess, fetchVideosError} from './features/videos/videoSlice';
import Toshow from './features/videos/Toshow';

function App() {

  const [ videos, setVideos ] = useState(useSelector(getVideos));
  const [ pending, setPending ] = useState(useSelector(getVideosPending));
  const [ error, setError ] = useState(useSelector(getVideosError));
  const url = fetchTrending();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    dispatch(fetchVideosPending());
    try {
      const res = await Axios.get(url);
      dispatch(fetchVideosSuccess(res.data));
    }catch {
      dispatch(fetchVideosError(error));
    }
}

  return (
    <Router>{
      pending ? <div>Loading...</div> :
      <div className="MainFrame">
        <SideNav />
          <div className="App mx-2">
            <Switch>
              <Route exact path="/"
                render={() => (
                  <React.Fragment>
                    <Home />
                  </React.Fragment>
                )}
              />
              <Route exact path="/videoList/:category/:subCat" component={Toshow} />
              <Route exaxt path="/videoDetail/:videoName" component={VideoDetail} />
              <Redirect to="/" />
            </Switch>
          </div>
      </div>
            }
    </Router>
  )
}

export default App;