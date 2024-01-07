export type TProduct = {
  id: number,
  title: string,
  categoryId: number,
  images: string[],
  price: number,
}

export type TProductProps = {
  data: TProduct,
  className?: string,
}

export type TCatalogProps = {
  hideFilter?: boolean
}

export interface ICategory {
  id: number,
  title: string
}

export interface IRootReducer {
  common: ICommonReducer,
  catalogWidget: ICatalogWidgetReducer,
}

export interface ICommonReducer {
  categories: ICategory[]
}

export interface ICatalogWidgetReducer {
  selectedCategory: number,
  offset: number,
}