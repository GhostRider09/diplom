export const SearchWidgetForm = ({isVisible, inputVal, setInputVal}:{
  isVisible: boolean,
  inputVal: string,
  setInputVal: React.Dispatch<React.SetStateAction<string>>
}) => {
  let classForm = "header-controls-search-form form-inline ";
  if ( !isVisible ) {
    classForm += 'invisible';
  }

  return (
    <form data-id="search-form" className={classForm}>
      <input 
        className="form-control" 
        placeholder="Поиск" 
        value={inputVal}
        onChange={({target}) => setInputVal(target.value)} />
    </form>
  )
}