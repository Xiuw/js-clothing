import React from "react";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cartAction";
import { selectItemsCount } from "../../redux/cart/cartSelector";
import { ReactComponent as CartImage } from "./shopping-bag.svg";
import "./Cart.scss";

const Cart = ({ cartToggle, itemCount }) => (
  <div className="cart-image" onClick={cartToggle}>
    <CartImage className="shopping-bag" />
    <span className="item">{itemCount}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  cartToggle: () => dispatch(cartToggle())
});
const mapStateToProps = state => ({
  itemCount: selectItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
