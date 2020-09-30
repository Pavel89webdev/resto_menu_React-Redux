import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import { deleteFromCart, submitOrder } from '../../actions';
import WithRestoService from '../hoc';


const CartTable = ({items, deleteFromCart, submitOrder, RestoService, succesOrder}) => {

    const sendOrder = () => {
        console.log('sendOrder is running');
        console.log('items:', items);

        // const { RestoService } = this.props;
        RestoService.setOrder(items)

        submitOrder();
    }

    return (
        <>

            {
                (succesOrder)?
                    <div className="cart__title">Ваш заказ успешно принят.</div>
                    :
                    <> 
                        <div className="cart__title">Ваш заказ:</div>
                        <div className="cart__list">
                            {
                                items.map( item => {
                                    const {title, price, url, id, count} = item;
                                    return (
                                        <div className="cart__item" key={id}>
                                            <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                            <div className="cart__item-title">{title}</div>
                                            <div className="cart__item-price">{price}$ (за {count}шт.) </div>
                                            <div onClick={() => deleteFromCart(id) } className="cart__close">&times;</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
            
                        {
                            (items.length > 0) ? 
                                <div className="button-wrapper">
                                        <button onClick={ () => sendOrder() } className="menu__btn" >Заказать</button>
                                </div>
                                : null
                        }
                    </>
            }
        </>
    );
};

const mapStateToProps = ({items, succesOrder}) => {
    return {
        items,
        succesOrder
    }
};

const mapDispatchToProps = {
    deleteFromCart,
    submitOrder
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));