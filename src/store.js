import { configureStore } from '@reduxjs/toolkit'
import toggleModeReducer  from './ducks/ModeSlice'

export const store = configureStore({
    reducer: {
        mode: toggleModeReducer
    }
})
