import React from 'react';
import "./CartDropDownStyles.scss";
import { CustomButton } from "../Custom-Button/CustomButton";

export const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    )
}