import React from 'react';
//redux imports
import { connect } from 'react-redux';

import CheckoutItem from '../../Components/Checkout-Item/CheckoutItem';
import { CheckoutButton } from '../../Components/CheckoutButton/CheckoutButton';

//import selectors
import {selectCartItems, selectCartTotal} from "../../Redux/Cart/CartSelectors";

import "./CheckoutStyles.scss";

const CheckoutPage = ({cartItems,total}) => {
    
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                   <span>Product</span> 
                </div>
                <div className='header-block'>
                   <span>Description</span> 
                </div>
                <div className='header-block'>
                   <span>Quantity</span> 
                </div>
                <div className='header-block'>
                   <span>Price</span> 
                </div>
                <div className='header-block'>
                   <span>Remove</span> 
                </div>


            </div>
            {
                cartItems.map(cartItem => (
                 <CheckoutItem 
                 key={cartItem.id}
                 cartItem={cartItem}/>   
                ))
            }
        <div className='total'>Total: ${total}</div>

        <div className='test-warning'>
            *Please use the following test credit card payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/24 - CVV:123
        </div>
        <div className='checkout-button'><CheckoutButton price={total}/></div>
        

        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);