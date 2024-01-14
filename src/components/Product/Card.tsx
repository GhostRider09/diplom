import { Link } from "react-router-dom";
import { TProductProps } from "../../models";
import { formatMoney } from "../../assets/tools";

export const Card = ({data: product, className}: TProductProps) => {
  const detailPageUrl = '/catalog/' + product.id;
  
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-products">
      <div className={className || "card product-card"}>
        <div className="card-img-wrapper">
          <img 
            src={product.images[0]}
            className="card-img-top img-fluid card-img" 
            alt={product.title} />
        </div>
          <div className="card-body">
            <p className="card-text">{product.title}</p>
            <p className="card-text">{formatMoney(product.price)}</p>
            <Link className="btn btn-outline-primary" to={detailPageUrl}>Заказать</Link>
          </div>
      </div>
    </div>
  )
}