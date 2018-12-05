import SET_MODE from './types'

export const setMode = mode => ({
    type: SET_MODE,
    payload: { mode }
})