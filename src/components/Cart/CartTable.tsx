import { formatMoney, moneyRound, setStoreValue } from "../../assets/tools";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ICartPosition } from "../../models";

import updateCartCounter from "../../redux/actions/updateCartCounter";

import { CartRow } from "./CartRow";

export const CartTable = ({positions}:{positions: ICartPosition[]}) => {
  const dispatch = useDispatch();
  
  const removeHandler = (uid: string) => {
    if ( uid !== "" && positions.length > 0 ) {
      const filteredItems = positions.filter(item => item.uid !== uid);
      setStoreValue('cart', filteredItems);
      dispatch(updateCartCounter(filteredItems.length));
    }
  }
  
  let summaryTotal = 0;
  if ( positions.length > 0 ) {
    summaryTotal = positions.reduce((sum, item) => {
      return sum += moneyRound(item.amount * item.price);
    }, 0);
  }

  useEffect(() => {
    dispatch(updateCartCounter(positions.length));
  }, [])

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((item, idx) => <CartRow 
          item={item}
          key={item.uid}
          removeItemHandler={removeHandler} idx={idx + 1} />)}
        <tr>
          <td colSpan={5} className="text-right">Общая стоимость</td>
          <td>{formatMoney(summaryTotal)}</td>
        </tr>
      </tbody>
    </table>
  )
}