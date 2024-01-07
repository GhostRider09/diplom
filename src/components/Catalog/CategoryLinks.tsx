import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { IRootReducer } from "../../models";
import { SET_SELECTED_CATEGORY } from "../../redux/actions";

export const CategoryLinks = () => {
  const dispatch = useDispatch();  
  const selectedCategoryId = useSelector((state:IRootReducer) => state.catalogWidget.selectedCategory);

  const linkClickHandler = (evt:React.MouseEvent) => {
    if ( evt.target instanceof HTMLElement ) {
      evt.preventDefault();

      dispatch({type: SET_SELECTED_CATEGORY, payload: evt.target.dataset.id || 0});
    }
  }

  const categoriesUrl = `${import.meta.env.VITE_API_URL}/categories`;
  const { data: loadedCategories, isSuccess } = useFetch(categoriesUrl);
  let categories = [{id: 0, title: "Все"}];
  if ( isSuccess && Array.isArray(loadedCategories) ) {
    categories = [...categories, ...loadedCategories];
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {isSuccess && Array.isArray(loadedCategories) && categories.map((category) => {
        const activeClass = ( category.id === selectedCategoryId ? "active" : "" );

        return (<li key={category.id} className="nav-item">
          <a 
            className={`nav-link ${activeClass}`} 
            href="#"
            data-id={category.id}
            onClick={linkClickHandler} >{category.title}</a>
        </li>);
      })}
    </ul>
  )
}
