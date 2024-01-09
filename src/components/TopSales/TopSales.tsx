import { useFetch } from "../../hooks/useFetch";

import { TProduct } from "../../models";

import { ErrorText } from "../Errors/ErrorText";
import { Preloader } from "../Preloader";
import { Card } from "../Product/Card";

export const TopSales = () => {
  const url = `${import.meta.env.VITE_API_URL}/top-sales`;
  const {data: items, isLoading, isSuccess, error} = useFetch<TProduct[]>(url);

  const renderComponent = () => {
    const isHideComponent = ( isSuccess && Array.isArray(items) && items.length <= 0 );

    if ( !isHideComponent ) {
      if ( isSuccess && Array.isArray(items) && items.length > 0 ) {
        return (
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
              {items.map(item => <Card data={item} key={item.id} />)}
            </div>
          </section>
        )
      }

      return (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          {isLoading && <Preloader />}
          {!isLoading && !isSuccess && <ErrorText text={error || "Ошибка загрузки данных!"} />}
        </section>
      )
    }
  }

  return renderComponent();
}