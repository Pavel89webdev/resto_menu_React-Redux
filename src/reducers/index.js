// import RestoService from '../services/resto-service';

// const restoservice = new RestoService();


const initialState = {
    menu: [],
    loading: true,
    serverError: false,
    items: [],
    totalCost: 0,
    succesOrder: false
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
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find( item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                count: 1
            }

            const idIndexMatch = state.items.findIndex( item => item.id === id)
            if(idIndexMatch > -1){

                let newItems = [...state.items];
                ++newItems[idIndexMatch].count;
                newItems[idIndexMatch].price = newItems[idIndexMatch].price + newItem.price;
                
                return {
                    ...state,
                    items: [
                        ...newItems
                    ],
                    totalCost: state.totalCost + newItem.price,
                    succesOrder: false
                }
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalCost: state.totalCost + newItem.price,
                succesOrder: false
            };
        case 'ITEM_REMOVE_FROM_CART':
            const index = action.payload;
            const itemIndex = state.items.findIndex( item => item.id === index);
        
            return {
                ...state,
                items: [
                    ...state.items.filter( (item, index) => index !== itemIndex )
                ]
            }
        case 'ORDER_IS_SUBMIT':
            return state;
        case 'SUCCES_ORDER':
            console.log('action SUCCES_ORDER is runing');
            return {
                ...state,
                succesOrder: true
            };
        default:
            return state;
    }
}

export default reduser;