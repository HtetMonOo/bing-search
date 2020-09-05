import { createSlice } from '@reduxjs/toolkit'
 
export const videoSlice = createSlice({
    name: 'video',
    initialState: {
      videos: [],
      search: []
   },
    reducers: {
      fetchVideosSuccess: (state, action) => {
          state.pending = false;
          state.videos = state.videos.concat(action.payload);
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
export const { fetchVideosSuccess, searchVideosSuccess } = videoSlice.actions;
export const getVideos = state => state.video.videos[0];
export const getSearch = state => state.video.search[0];
  