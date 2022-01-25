import React from 'react';
import "./CheckoutItemStyles.scss";

import { connect } from 'react-redux';
import { clearItemsFromCart, addItem, removeItem } from '../../Redux/Cart/CartActions';

const CheckoutItem = ({cartItem, clearItemsFromCart, removeItem, addItem}) => {

    const {name, price, quantity, imageUrl} = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl}
                alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                
                <div className='arrow' onClick={()=> addItem(cartItem)}>
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>

            <div className='remove-button'onClick={()=>clearItemsFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemsFromCart: item => dispatch(clearItemsFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);