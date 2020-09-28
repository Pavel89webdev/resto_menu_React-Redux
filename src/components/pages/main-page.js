import React from 'react';
import MenuList from '../menu-list';

const MainPage = ({id = null}) => {
    return (
        <MenuList itemId={id}/>
    )
}

export default MainPage;
