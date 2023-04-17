import { createSlice } from '@reduxjs/toolkit'


export const GIFPlaybackSlice = createSlice({
  name: 'GIFPlayback',
  initialState: {
    value: {
        playback: false,
        gif: ""
    }
  },
  reducers: {
    toggle: (state, action) => {
        state.value.playback = !state.value.playback
        state.value.gif = action.payload
    }
  }
})

export const { toggle } = GIFPlaybackSlice.actions
export default GIFPlaybackSlice.reducer