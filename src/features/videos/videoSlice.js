import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import Axios from 'axios';
import { fetchTrending } from '../../.utils';
 

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
      videos: [],
      pending: false,
      error: null
   },
    reducers: {
      fetchVideosPending: state => {
        state.pending = true;
      },
      fetchVideosSuccess: (state, action) => {
          state.pending = false;
          state.videos = state.videos.concat(action.payload);
          console.log(action.videos)
          console.log(state.videos);
      },
      fetchVideosError: (state, action) => {
        state.pending = false
        state.error = action.error
      }
    } 
  })
export default videoSlice.reducer;
export const { fetchVideosPending, fetchVideosSuccess, fetchVideosError } = videoSlice.actions;
export const getVideos = state => state.video.videos[0];
export const getVideosPending = state => state.video.pending;
export const getVideosError = state => state.video.error;
  