const initialState = {
    menu: [],
    loading: true,
    serverError: false
}

const reduser = (state = initialState, action) => {
    console.log(`state from reduser:`);
    console.log(state)
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            }
        case 'SERVER_ERROR':
            return {
                ...state,
                serverError: true
            }
        default:
            return state;
    }
}

export default reduser;