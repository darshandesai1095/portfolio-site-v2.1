import { configureStore } from '@reduxjs/toolkit'
import GIFPlaybackReducer from './redux/features/GIFPlaybackSlice'

export default configureStore({
  reducer: {
    GIFPlayback: GIFPlaybackReducer
  }
})