import React from "react";
import {useNavigate} from "react-router-dom";

import "./CartDropDownStyles.scss";
import { CustomButton } from "../Custom-Button/CustomButton";
import { CartItem } from "../Cart-Item/CartItem";

//import selector
import { selectCartItems } from "../../Redux/Cart/CartSelectors";
import {toggleCartHidden} from "../../Redux/Cart/CartActions";

import { connect } from "react-redux";

const CartDropDown = ({ cartItems, toggleCartHidden }) => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
    toggleCartHidden();
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))): (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
