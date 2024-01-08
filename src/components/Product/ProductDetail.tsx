import { useState } from "react";
import { IProductDetail } from "../../models"
import { Sizes } from "./Sizes";
import { Counter } from "./Counter";

export const ProductDetail = ({data}: {
  data: IProductDetail
}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [amount, setAmount] = useState<number>(1);

  const {
    id,
    title,
    images,
    sizes,
    sku,
    season,
    reason,
    material,
    manufacturer,
    color,
  } = data;

  let isOutStock = true;
  if ( sizes.length > 0 ) {
    sizes.map(size => {
      if ( size.available === true ) {
        isOutStock = false;
      }
    });
  }

  const appendToCart = () => {

  }

  return (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        {images.length && <div className="col-5">
          <img
            src={images[0]}
            className="img-fluid" alt={title} />
        </div>}
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
            </tbody>
          </table>
          {isOutStock && <div className="text-center">
            <p style={{color: "#f00"}}>Нет в наличии</p>
          </div>}
          {!isOutStock && <>
            <div className="text-center">  
              <Sizes 
                data={sizes} 
                selected={selectedSize} 
                onSelectSize={setSelectedSize} />
              <Counter amount={amount} changeAmount={setAmount} />
            </div>
            <button 
              className="btn btn-danger btn-block btn-lg"
              disabled={selectedSize === ""}
              onClick={appendToCart}>В корзину</button>
          </>}
        </div>
      </div>
    </section>
  )
}