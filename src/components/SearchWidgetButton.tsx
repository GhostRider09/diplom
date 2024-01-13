export const SearchWidgetButton = ({clickHandler}:{
  clickHandler: React.MouseEventHandler
}) => {
  return (
    <div 
      data-id="search-expander" 
      className="header-controls-pic header-controls-search"
      onClick={clickHandler} ></div>
  )
}