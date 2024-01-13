import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootReducer } from "../../models";

import setQueryValue from "../../redux/actions/setQueryValue";

export const CatalogFilter = () => {
  const query = useSelector((state:IRootReducer) => state.common.query);
  const [inp, setInp] = useState(query);
  const dispatch = useDispatch();

  useEffect(() => {
    let ttr = setTimeout(() => { 
      dispatch(setQueryValue(inp));
    }, 1000);

    return () => {
      if ( typeof ttr !== "undefined" ) {
        clearTimeout(ttr);
      }
    }
  }, [inp]);

  return (
    <form className="catalog-search-form form-inline">
      <input 
        className="form-control" 
        placeholder="Поиск" 
        value={inp}
        onChange={({target}) => setInp(target.value)} />
    </form>
  )
}