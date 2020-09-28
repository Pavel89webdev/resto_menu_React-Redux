import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, adedToCart} from '../../actions';
import Spinner from '../spinner';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        this.props.menuRequested();
        const { RestoService } = this.props;

        RestoService.getMenuItems()
            .then( res => this.props.menuLoaded(res))
            .catch( err => this.props.serverError());
    }

    menuList = () => {
        const {menuItems, adedToCart} = this.props

        if(this.props.itemId){
            const {itemId} = this.props

            const menuItem = menuItems.find( menuItem => menuItem.id === +itemId);

            return (
                <ul className="menu__list">
                       <MenuListItem 
                            key={menuItem.id} 
                            menuItem={menuItem}
                            onAddToCart={ () => adedToCart(menuItem.id)}
                        />
                </ul>
            )
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map( menuItem => {
                        return <MenuListItem 
                                key={menuItem.id} 
                                menuItem={menuItem}
                                onAddToCart={ () => adedToCart(menuItem.id)}
                            />
                    } )
                }
            </ul>
        )
    }

    render() {
        const {loading} = this.props;
        
        if(loading){
            return <Spinner/>
        }

        return (
            this.menuList()
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        serverError: state.serverError
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    adedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));