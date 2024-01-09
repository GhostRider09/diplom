import { formatMoney, moneyRound } from "../../assets/tools"

import { ICartPosition } from "../../models"

import { Link } from "react-router-dom"

export const CartRow = ({item, idx, removeItemHandler}: {
  item: ICartPosition, 
  idx: number,
  removeItemHandler?: Function
}) => {
  const detailPageUrl = `/catalog/${item.id}`
  const onRemoveClick = () => ( removeItemHandler && removeItemHandler(item.uid) );
  let summary = item.price;
  if ( item.amount > 1 ) {
    summary = moneyRound(item.amount * item.price);
  }

  return (
    <tr>
      <td scope="row">{idx}</td>
      <td><Link to={detailPageUrl}>{item.title}</Link></td>
      <td>{item.size}</td>
      <td>{item.amount}</td>
      <td>{formatMoney(item.price)}</td>
      <td>{formatMoney(summary)}</td>
      <td>
        <button 
          className="btn btn-outline-danger btn-sm"
          onClick={onRemoveClick} >Удалить</button>
      </td>
    </tr>
  )
}