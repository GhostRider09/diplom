import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStoreValue, setStoreValue } from "../../assets/tools";

import { ICartPosition, IOrder } from "../../models";

import { ErrorText } from "../Errors/ErrorText";
import { SuccessText } from "../Errors/SuccessText";

import updateCartCounter from "../../redux/actions/updateCartCounter";

export const OrderForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isSentOrder, setIsSentOrder] = useState(false);
  const [formdata, setFormdata] = useState({
    phone: "",
    address: "",
    agree: "N"
  });  

  let changeInputHandler = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = target;

    if (target.type === "checkbox") {
      value = ( target.checked ? "Y" : "N" );
      if (target.checked) {
        setError("");
      }
    }
    setFormdata(prevForm => ({...prevForm, [name]: value}));
  }

  async function sendOrder(order: IOrder) {
    let url = `${import.meta.env.VITE_API_URL}/order`;

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order)
    });

    if ( response.status !== 204 ) {
      return "Response error"
    }

    return "Order sent";
  }

  let submitFormHandler = (e:React.FormEvent) => {
    e.preventDefault();

    if ( formdata.agree !== "Y" ) {
      setError("Нельзя отправить форму без согласия с правилами доставки!");
      return false;
    }

    let positions: ICartPosition[] = (getStoreValue("cart") || []);

    let order = {
      owner: {
        phone: formdata.phone,
        address: formdata.address
      },
      items: positions.map(position => {
        return {
          id: position.id,
          price: position.price,
          count: position.amount
        }
      })
    };

    sendOrder(order).then(responseData => {
      if ( responseData !== "Order sent" ) {
        setError(responseData);
        return;
      }

      setError("");
      setIsSentOrder(true);
      setFormdata({
        phone: "",
        address: "",
        agree: "N"
      });
      
      setTimeout(() => {
        setStoreValue('cart', []);
        dispatch(updateCartCounter(0));
      }, 2000);
    });    
  }

  return (
    <>
      {isSentOrder && <SuccessText text="Поздравляем! Ваш заказ успешно отправлен!" />}
      {!isSentOrder && <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>      
        <form className="card-body" onSubmit={submitFormHandler}>
          {error.length > 0 && <ErrorText text={error} />}
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input 
              className="form-control" 
              id="phone" 
              placeholder="Ваш телефон"
              name="phone"
              required
              value={formdata.phone}
              onChange={changeInputHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input 
              className="form-control" 
              id="address" 
              placeholder="Адрес доставки"
              name="address" 
              required
              value={formdata.address}
              onChange={changeInputHandler} />
          </div>
          <div className="form-group form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="agreement" 
              name="agree"
              onChange={changeInputHandler} />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">Оформить</button>
        </form>
      </div>}
    </>
  )
}