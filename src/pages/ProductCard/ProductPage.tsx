import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { IProductDetail } from "../../models";

import { Preloader } from "../../components/Preloader";
import { ErrorText } from "../../components/Errors/ErrorText";
import { Page404 } from "../404/Page404";
import { ProductDetail } from "../../components/Product/ProductDetail";

export const ProductPage = () => {
  const { id: productId } = useParams();

  const url = `${import.meta.env.VITE_API_URL}/items/${productId}`;
  const {data: product, isLoading, isSuccess, error} = useFetch<IProductDetail>(url);

  const isNotFound = ( !isLoading && !isSuccess && error.toLowerCase().includes('not found') );

  return (
    <>
      {isLoading && <section className="top-sales"><Preloader /></section> }
      {isNotFound && <Page404 />}
      {!isLoading 
        && !isSuccess 
        && !isNotFound
        && <section className="top-sales">
          <ErrorText text={"Ошибка загрузки данных!"} />
        </section>}
      {isSuccess && product && <ProductDetail data={product} />}
    </>
  )
}