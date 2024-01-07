import { useFetch } from "../../hooks/useFetch";
import { ErrorText } from "../Errors/ErrorText";
import { Preloader } from "../Preloader";
import { Card } from "../Product/Card";

export const CatalogItems = ({categoryId}) => {
  let url = `${import.meta.env.VITE_API_URL}/items`;
  if (categoryId > 0) {
    url += "?categoryId=" + categoryId;
  }
  const { data: items, isLoading, isSuccess } = useFetch(url);

  return (
    <>
      <div className="row">
        {isLoading && <Preloader />}
        {!isLoading && !isSuccess && <ErrorText text="Ошибка загрузки данных! Обновите страницу!" />}
        {isSuccess && Array.isArray(items) && items.map(item => <Card 
          data={item} 
          className="card catalog-item-card" 
          key={item.id} />
        )}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>    
    </>
  )
}