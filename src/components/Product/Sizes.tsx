import { TSizesProps } from "./types"

export const Sizes = ({data, selected, onSelectSize}:TSizesProps) => {
  const selectSizeHandler = (evt:React.MouseEvent) => {
    evt.preventDefault();

    if ( evt.target instanceof HTMLElement ) {
      onSelectSize(evt.target.dataset.size || "");
    }
  }

  const renderComponent = () => {
    if (data.length <= 0) {
      return <></>;
    }

    const availableSizes = data.filter(size => size.available);
    if (availableSizes.length <= 0) {
      return <></>;
    }

    return (
      <p>Размеры в наличии: {availableSizes.map((item, idx) => {
        const sizeClass = ( item.size === selected ? "catalog-item-size selected" : "catalog-item-size" );
        return <span 
          key={idx}
          className={sizeClass}
          data-size={item.size}
          onClick={selectSizeHandler} >{item.size}</span>;
      })}</p>      
    )
  }

  return renderComponent();
}