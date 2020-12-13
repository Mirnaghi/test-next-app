// action creator for setting show to true/false
export function showSpinner(show) {
    return {
        type: "SHOW_SPINNER",
        payload: show
    }
}

// show spinner reducer
export default function showSpinnerReducer(state = false, action) {
    switch(action.type) {
        case "SHOW_SPINNER":
            return action.payload;
        default:
            return state;    
    }
}