import { useState } from "react"
import { useDispatch } from "react-redux"

import setQueryValue from "../redux/actions/setQueryValue"

import { Link, useNavigate } from "react-router-dom"
import { MainMenu } from "../components/Menu/MainMenu"
import { CartWidget } from "../components/Cart/CartWidget"
import { SearchWidgetForm } from "../components/SearchWidgetForm"
import { SearchWidgetButton } from "../components/SearchWidgetButton"

export const Header = () => {
  const [ searchVisibility, setSearchVisibility ] = useState(false);
  const [ searchInputValue, setSearchInputValue ] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchClickHandler = () => {
    if ( searchVisibility && searchInputValue && searchInputValue.length ) { 
      dispatch(setQueryValue(searchInputValue));
      setSearchInputValue("");
      navigate( "/catalog" );
    }
    setSearchVisibility( !searchVisibility );
  }

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src="/img/header-logo.png" alt="Bosa Noga" />
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <MainMenu />
              <div>
                <div className="header-controls-pics">
                  <SearchWidgetButton clickHandler={searchClickHandler} />
                  <CartWidget />
                </div>
                <SearchWidgetForm 
                  isVisible={searchVisibility} 
                  inputVal={searchInputValue}
                  setInputVal={setSearchInputValue} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}