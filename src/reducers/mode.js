import SET_MODE from '../actions/types'

export default function(state=0, action) {
    switch(action.type) {
        case SET_MODE:
            return action.payload.mode
        default:
            return state
    }
}