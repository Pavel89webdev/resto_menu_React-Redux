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

const adedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const submitOrder = () => {
    return {
        type: 'ORDER_IS_SUBMIT',
    }
}

const succesOrder = () => {
    return {
        type: 'SUCCES_ORDER',
    }
}

export {
    menuLoaded,
    menuRequested,
    serverError,
    adedToCart,
    deleteFromCart,
    submitOrder,
    succesOrder
};