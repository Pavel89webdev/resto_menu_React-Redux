import React from 'react';
import './menu-list-item.scss';
import { Link } from 'react-router-dom';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, category, url, id} = menuItem;

    const categoryIcon = () => {
        switch (category){
            case 'salads':
                return <i className="fas fa-carrot"></i>
            case 'pizza':
                return <i className="fas fa-pizza-slice"></i>
            case 'meat':
                return <i className="fas fa-drumstick-bite"></i>
            default:
                return null
        }
    }

    return (
        <li className="menu__item">
            <Link to={`/${id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div>{categoryIcon()}</div>
                <div className="menu__price">Price: <span>{price}$</span></div>
            </Link>
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;