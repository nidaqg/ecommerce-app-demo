import React from 'react';
//redux imports
import { connect } from 'react-redux';

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
                 <span>{cartItem.name}</span>   
                ))
            }
           
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);