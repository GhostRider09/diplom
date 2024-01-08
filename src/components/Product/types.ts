import { TProductSizes } from "../../models"

export type TSizesProps = {
  data: TProductSizes[],
  selected: string, 
  onSelectSize: React.Dispatch<React.SetStateAction<string>>
}

export type TCounterProps = {
  amount: number, 
  changeAmount: React.Dispatch<React.SetStateAction<number>>
  maxCount?: number,
}