import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../assets/tools";

import { IRootReducer } from "../../models";

import { ErrorText } from "../Errors/ErrorText";
import { Preloader } from "../Preloader";
import { Card } from "../Product/Card";
import { MoreButton } from "../MoreButton";
import { NoticeText } from "../Errors/NoticeText";

import setItemList from "../../redux/actions/setItemList";
import appendItemsToList from "../../redux/actions/appendItemsToList";
import setWidgetPage from "../../redux/actions/setWidgetPage";
import incrementWidgetPage from "../../redux/actions/incrementWidgetPage";
import switchLazyLoad from "../../redux/actions/switchLazyLoad";

export const CatalogItems = ({queryDisable}: {queryDisable: boolean}) => {
  const dispatch = useDispatch();
  const { 
    selectedCategory, 
    products, 
    page: currentPage, 
    canLazyLoad 
  } = useSelector((state:IRootReducer) => state.catalogWidget);  
  const query = useSelector((state:IRootReducer) => state.common.query);

  const [ isLazyLoading, setLazyLoading ] = useState(false);
  const [ isItemsLoading, setItemsLoading ] = useState(true);
  const [ isNotFound, setIsNotFound ] = useState(false);
  
  let itemsUrl = `${import.meta.env.VITE_API_URL}/items`;
  let urlParams = [];
  if (selectedCategory > 0) {
    urlParams.push(`categoryId=${selectedCategory}`);
  }
  if ( !queryDisable && query && query.length > 0 ) {
    urlParams.push(`q=${query}`);
  }
  if (urlParams.length) {
    itemsUrl += "?" + urlParams.join("&");  
  }

  const resetPagination = () => {
    if ( currentPage > 1 ) {
      dispatch(setWidgetPage(1));
    }
    if ( !canLazyLoad ) {
      dispatch(switchLazyLoad(true));
    }
  }

  useEffect(() => {
    setItemsLoading(true);
    setIsNotFound(false);
    fetchData(itemsUrl).then(products => {
      setItemsLoading(false);
      
      if (Array.isArray(products)) {
        dispatch(setItemList(products));
        dispatch(setWidgetPage(1));
        if ( products.length <= 0 ) {
          setIsNotFound(true);
        }

        if ( products.length < 6 ) {
          dispatch(switchLazyLoad(false));
        }
      } else {
        resetPagination();
      }
    });
  }, [itemsUrl]);

  useEffect(() => {
    resetPagination();
  }, [query]);

  const onLoadingProducts = () => {
    const offset = ( currentPage * 6 ) + 1;

    if ( selectedCategory > 0 || query.length > 0 ) {
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
          className="card catalog-item-card product-card" 
          key={item.id} />
        )}
      </div>
      {!isLoading && !isNotFound && !isSuccess && <ErrorText text="Ошибка загрузки данных! Обновите страницу!" />}
      {!isLoading && isNotFound && <NoticeText 
        text={`По вашему запросу "${query}" товаров не найдено! Измените параметры запроса!`} />}
      {isLoading && <Preloader />}
      {!isLoading
        && isSuccess
        && canLazyLoad 
        && <MoreButton onLazyLoadHandler={onLoadingProducts} />}
    </>    
  )
}