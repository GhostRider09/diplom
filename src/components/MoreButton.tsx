export const MoreButton = ({onLazyLoadHandler}: {
  onLazyLoadHandler: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <div className="text-center">
      <button 
        className="btn btn-outline-primary"
        onClick={onLazyLoadHandler} >Загрузить ещё</button>
    </div> 
  )
}