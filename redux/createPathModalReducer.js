export function openCreateModule() {
    return {
        type: "OPEN_CREATE_MODULE"
    }
}

export function openCreatePath() {
    return {
        type: "OPEN_CREATE_PATH"
    }
}

function createPathModalReducer(state = {
    createModuleIsOpen: false,
    createPathIsOpen: false
}, action) {
    switch(action.type) {
        case "OPEN_CREATE_MODULE":
            return {
                ...state, 
                createModuleIsOpen: !state.createModuleIsOpen
            }
        case "OPEN_CREATE_PATH":
            return {
                ...state,
                createPathIsOpen: !state.createPathIsOpen
            }    
        default:
            return {...state}    
    }
}

export default createPathModalReducer;
