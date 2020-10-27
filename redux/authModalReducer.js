export function openSignUpModal(open) {
    return {
        type: "CHANGE_SIGNUP_MODAL_OPEN",
        payload: open
    }
}

export function openLoginModal(open) {
    return {
        type: "CHANGE_LOGIN_MODAL_OPEN",
        payload: open
    }
}

function authModalReducer(authModal = {signUp: false, login: false}, action) {
    switch(action.type) {
        case "CHANGE_SIGNUP_MODAL_OPEN":
            return {
                login: false,
                signUp: action.payload
            }
        case "CHANGE_LOGIN_MODAL_OPEN":
            return {
                signUp: false,
                login: action.payload
            }    
        default:
            return authModal    
    }
}

export default authModalReducer