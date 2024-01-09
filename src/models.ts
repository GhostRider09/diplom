export type TProduct = {
  id: number,
  title: string,
  categoryId: number,
  images: string[],
  price: number,
}

export interface IProductDetail {
  id: number,
  title: string,
  category: number,
  images: string[],
  price: number,
  sizes: TProductSizes[],
  sku: string,
  season: string,
  reason: string,
  material: string,
  manufacturer: string,
  color: string,
  heelSize: string
}

export interface ICartPosition {
  uid: string,
  id: number,
  title: string,
  size: string,
  amount: number,
  price: number 
}

export type TProductSizes = {
  size: string,
  available: boolean
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
  cartCounter: number
}

export interface ICatalogWidgetReducer {
  selectedCategory: number,
  page: number,
  products: TProduct[],
  canLazyLoad: boolean,
}

export type TReducerActionProps = {
  type: string,
  payload: any
}