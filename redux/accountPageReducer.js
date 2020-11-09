export function changeAccountPage(page) {
    return {
        type: "CHANGE_ACCOUNT_PAGE",
        payload: page
    }
}

export default function accountPageReducer(pageName = "learned_specialities", action) {
    switch(action.type) {
        case "CHANGE_ACCOUNT_PAGE":
            return action.payload
        default:
            return pageName
    }
}
