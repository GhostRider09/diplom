import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStoreValue, setStoreValue } from "../../assets/tools";

import { ICartPosition, IProductDetail } from "../../models"

import { Sizes } from "./Sizes";
import { Counter } from "./Counter";

export const ProductDetail = ({data}: {
  data: IProductDetail
}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [amount, setAmount] = useState<number>(1);
  const navigate = useNavigate();
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
    price,
  } = data;

  let isOutStock = true;
  if ( sizes.length > 0 ) {
    sizes.map(size => {
      if ( size.available === true ) {
        isOutStock = false;
      }
    });
  }

  const cartPositions:ICartPosition[] = getStoreValue('cart') || [];
  const issetPositionIntoCart = selectedSize && cartPositions.filter(item => { 
    const uid = (id.toString() + selectedSize);
    return item.uid === uid;
  });

  const appendToCart = () => {
    if ( issetPositionIntoCart.length <= 0 ) {
      const position: ICartPosition = {
        uid: id.toString() + selectedSize,
        id: id,
        title: title,
        size: selectedSize,
        amount: amount,
        price: price,
      }

      let cart = ( getStoreValue('cart') || [] );
      setStoreValue("cart", [...cart, position]);
    }

    navigate("/cart");
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
              onClick={appendToCart} 
            >{issetPositionIntoCart.length > 0 ? "Перейти в корзину" : "Добавить в корзину"}</button>
          </>}
        </div>
      </div>
    </section>
  )
}