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

export {
    menuLoaded,
    menuRequested
};