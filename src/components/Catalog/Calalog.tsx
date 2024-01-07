import { useFetch } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";

import { ICategory, ICommonReducer, IRootReducer, TCatalogProps } from "../../models";

import setCategoryList from "../../redux/actions/setCategoryList";

import { ErrorText } from "../Errors/ErrorText";
import { Preloader } from "../Preloader";
import { Card } from "../Product/Card";
import { CatalogFilter } from "./CatalogFilter";
import { CategoryLinks } from "./CategoryLinks";
import { SET_CATEGORY_LIST, SET_SELECTED_CATEGORY } from "../../redux/actions";
import { useEffect, useState } from "react";
import { CatalogItems } from "./CatalogItems";

export const Catalog = ({hideFilter}: TCatalogProps) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state:IRootReducer) => state.catalogWidget);

const [cats, setCats] = useState([]);

  // const { categories } = useSelector((state:IRootReducer) => {
  //   console.log('st.cmn', state);
  //   return state.cmn;
  // });
  // let categories = [];
  // const categories = useSelector((state) => state.cmn.categories);

  let it = [], isL = true, isS = false, cat = [];
  
  // if ( !categories || categories.length <= 0 ) {
  // if ( !categories || categories.length <= 0 ) {
    // console.log('dd', categories);
    // if ( cats.length <= 0 ) {
    //   const categoriesUrl = `${import.meta.env.VITE_API_URL}/categories`;
    //   const {
    //     data: loadedCategories, 
    //     isLoading: isCategoryLoading,
    //     isSuccess: isCategoryLoaded
    //   } = useFetch(categoriesUrl);
    //   if ( isCategoryLoaded ) {
    //     setCats(loadedCategories);
    //   }
    // }

    // if ( cats.length > 0 || selectedCategory === 0 ) {
      
    //   cat = cats;
    //   // l = loadedCategories;
    //   console.log('dd', cats);
    //   // dispatch(setCategoryList(loadedCategories));
    //   // dispatch({type: 'SSET_SELECTED_CATEGORY', payload: loadedCategories});
    // if ( selectedCategory <= 0 ) {
    //   let url = `${import.meta.env.VITE_API_URL}/items`;

    //   const {data: items, isLoading, isSuccess} = useFetch(url);
    //   if (isSuccess) {
    //     it = items; isL = isLoading, isS = isSuccess;
    //   }
    // }

   
  // }

  
  // useEffect(() => {
    console.log(555);
  // }, [l]);
  // console.log(234);
  // console.log({categories});
  

  

  // const renderComponent = () => {
  //   // // if ( categories ) {
  //     if ( isS && it.length > 0 ) {
  //       console.log(444);
  //       return (
  //         <section className="catalog">
  //           <h2 className="text-center"
  //           onClick={() => {
  //             //dispatch(setCategoryList([{id: 1, title: 'sdf'}]));
  //             // dispatch({type: SET_CATEGORY_LIST, payload: [{id: 1, title: 'sdf'}]});
  //             dispatch({type: SET_SELECTED_CATEGORY, payload: 12});
  //           }}
  //           >Каталог {selectedCategory}</h2>
  //           {/* {hideFilter !== true && <CatalogFilter />} */}
  //           <CategoryLinks items={cat} />
  //           <CatalogItems catId={selectedCategory} />
                        
  //           <div className="text-center">
  //             <button className="btn btn-outline-primary">Загрузить ещё</button>
  //           </div>
  //         </section>
  //       )
  //   //   // }
  //   }

  //   return (
  //     <section className="catalog">
  //       <h2 className="text-center">Каталог</h2>
  //       {isL && <Preloader />}
  //       {!isL && !isS && <ErrorText text="Ошибка загрузки данных! Обновите страницу!" />}
  //     </section>
  //   )
  // }

  // // return renderComponent();

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {hideFilter !== true && <CatalogFilter />}
      <CategoryLinks />
      <CatalogItems categoryId={selectedCategory} />
    </section>
  )
}