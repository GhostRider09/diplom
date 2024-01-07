import { Catalog } from "../../components/Catalog/Calalog";
import { TopSales } from "../../components/TopSales/TopSales";

export const HomePage = () => {
  

  return (
    <>
      <TopSales />
      <Catalog hideFilter={true} />
    </>
  )
}