import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../assets/tools";

import { ErrorText } from "../Errors/ErrorText";
import { Preloader } from "../Preloader";
import { Card } from "../Product/Card";
import { IRootReducer } from "../../models";
import { MoreButton } from "../MoreButton";

import setItemList from "../../redux/actions/setItemList";
import appendItemsToList from "../../redux/actions/appendItemsToList";
import setWidgetPage from "../../redux/actions/setWidgetPage";
import incrementWidgetPage from "../../redux/actions/incrementWidgetPage";
import switchLazyLoad from "../../redux/actions/switchLazyLoad";

export const CatalogItems = () => {
  const dispatch = useDispatch();
  const { 
    selectedCategory, 
    products, 
    page: currentPage, 
    canLazyLoad 
  } = useSelector((state:IRootReducer) => state.catalogWidget);  
  
  const [ isLazyLoading, setLazyLoading ] = useState(false);
  const [ isItemsLoading, setItemsLoading ] = useState(true);
  
  let itemsUrl = `${import.meta.env.VITE_API_URL}/items`;
  if (selectedCategory > 0) {
    itemsUrl += "?categoryId=" + selectedCategory;
  }

  useEffect(() => {
    setItemsLoading(true);
    fetchData(itemsUrl).then(products => {
      setItemsLoading(false);
      
      if (Array.isArray(products)) {
        if ( products.length > 0 ) {
          dispatch(setItemList(products));
          dispatch(setWidgetPage(1));
        }

        if ( products.length < 6 ) {
          dispatch(switchLazyLoad(false));
        }
      }
    });
  }, [itemsUrl]);

  const onLoadingProducts = () => {
    const offset = ( currentPage * 6 ) + 1;

    if ( selectedCategory > 0 ) {
      itemsUrl += '&offset=' + offset;
    } else {
      itemsUrl += '?offset=' + offset;
    }

    setLazyLoading(true);
    fetchData(itemsUrl).then(products => {
      setLazyLoading(false);

      dispatch(appendItemsToList(products));
      dispatch(incrementWidgetPage());
      if ( products.length < 6 ) {
        dispatch(switchLazyLoad(false));
      }
    });
  }

  const isLoading = (isLazyLoading || isItemsLoading);
  const isSuccess = (!isItemsLoading && products && products.length > 0);

  return (
    <>
      <div className="row">
        {isSuccess && products.map(item => <Card 
          data={item} 
          className="card catalog-item-card" 
          key={item.id} />
        )}
      </div>
      {!isLoading && !isSuccess && <ErrorText text="Ошибка загрузки данных! Обновите страницу!" />}
      {isLoading && <Preloader />}
      {!isLoading
        && isSuccess
        && canLazyLoad 
        && <MoreButton onLazyLoadHandler={onLoadingProducts} />}
    </>    
  )
}