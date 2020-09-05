import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
 
export const videoSlice = createSlice({
    name: 'video',
    initialState: {
      videos: [],
      search: [],
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
      },
      fetchVideosError: (state, action) => {
        state.pending = false;
        state.error = action.payload;
      },
      searchVideosSuccess: (state, action) => {
          state.pending = false;
          state.search = state.search.concat(action.payload);
          console.log(action.payload);
          console.log(state.search);
      },
    } 
  })
export default videoSlice.reducer;
export const { fetchVideosPending, fetchVideosSuccess, fetchVideosError, searchVideosSuccess } = videoSlice.actions;
export const getVideos = state => state.video.videos[0];
export const getVideosPending = state => state.video.pending;
export const getVideosError = state => state.video.error;
export const getSearch = state => state.video.search[0];
  