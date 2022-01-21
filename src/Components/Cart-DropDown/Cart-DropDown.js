import React from 'react';
import "./CartDropDownStyles.scss";
import { CustomButton } from "../Custom-Button/CustomButton";
import {CartItem} from "../Cart-Item/CartItem";

import { connect } from 'react-redux';

const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem
                        key={cartItem.id}
                        item={cartItem}
                        />
                    ))
                }


            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);
