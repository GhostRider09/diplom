import { useState } from "react";
import { getStoreValue } from "../../assets/tools";

import { ICartPosition } from "../../models";

import { Link } from "react-router-dom";
import { CartTable } from "../../components/Cart/CartTable";
import { ErrorText } from "../../components/Errors/ErrorText";
import { OrderForm } from "../../components/Cart/OrderForm";

export const CartPage = () => {
  const [_, updateState] = useState(new Date().getTime());
  let cart: ICartPosition[] = (getStoreValue("cart") || []);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        {cart.length > 0 
          ? <CartTable positions={cart} updateState={updateState} /> 
          : <ErrorText text="Корзина пуста"><Link to="/catalog">Перейти в каталог</Link></ErrorText>}
      </section>
      {cart.length > 0 && <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <OrderForm />
      </section>}
    </>
  )
}