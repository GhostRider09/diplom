import { NavLink } from "react-router-dom"

export function FooterMenu() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink className={() => "nav-link"} to="/about">О магазине</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={() => "nav-link"} to="/catalog">Каталог</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={() => "nav-link"} to="/contacts">Контакты</NavLink>
      </li>
    </ul>
  )
}