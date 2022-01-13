import React from "react";

import "./CartStyles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

//redux imports
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
