const initialState = {
    menu: [],
    loading: true
}

const reduser = (state = initialState, action) => {
    console.log(`state from reduser:`);
    console.log(state)
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true
            }
        default:
            return state;
    }
}

export default reduser;