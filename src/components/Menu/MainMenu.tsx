import { NavLink } from "react-router-dom"

export function MainMenu() {
  const activeLink = ({ isActive }: {isActive:boolean}) => (isActive ? "nav-link active" : "nav-link" );

  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className={activeLink} to="/">Главная</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={activeLink} to="/catalog">Каталог</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={activeLink} to="/about">О магазине</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={activeLink} to="/contacts">Контакты</NavLink>
      </li>
    </ul>    
  )
}