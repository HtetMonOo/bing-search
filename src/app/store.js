import { configureStore } from '@reduxjs/toolkit'
import videoReducer from '../features/videos/videoSlice'

export default configureStore({
  reducer: {
    video: videoReducer
  }
})