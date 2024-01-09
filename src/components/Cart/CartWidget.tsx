import { useSelector } from "react-redux";

import { IRootReducer } from "../../models";

import { Link } from "react-router-dom"

export const CartWidget = () => {
  const counter = useSelector((state:IRootReducer) => state.common.cartCounter);

  return (
    <Link className="header-controls-pic header-controls-cart" to="/cart">
      {counter > 0 && <div className="header-controls-cart-full">{counter}</div>}
      <div className="header-controls-cart-menu"></div>
    </Link>
  )
}