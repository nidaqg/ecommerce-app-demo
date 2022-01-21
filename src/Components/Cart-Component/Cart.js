import React from "react";

import "./CartStyles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//import selector
import { selectCartItemsCount } from "../../Redux/Cart/CartSelectors";

//redux imports
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

//use reduce function to find total quantity
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
