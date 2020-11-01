export function openMenuBar(open) {
    return {
        type: "CHANGE_MENUBAR_OPEN",
        payload: open
    }
}

function menuBarReducer(menuBarIsOpen = false, action) {
    switch(action.type) {
        case "CHANGE_MENUBAR_OPEN":
            return action.payload
        default:
            return menuBarIsOpen   
    }
}

export default menuBarReducer