const menuLoaded = ( newMenu ) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
        loading: true
    }
}

const serverError = () => {
    return {
        type: 'SERVER_ERROR',
        serverError: true
    }
}

export {
    menuLoaded,
    menuRequested,
    serverError
};