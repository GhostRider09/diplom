import { ICartPosition } from "../../models"

export type TCartTableProps = {
  positions: ICartPosition[],
  updateState: React.Dispatch<React.SetStateAction<number>>
}