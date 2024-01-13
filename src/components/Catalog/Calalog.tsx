import { TCatalogProps } from "../../models";

import { CatalogFilter } from "./CatalogFilter";
import { CategoryLinks } from "./CategoryLinks";
import { CatalogItems } from "./CatalogItems";

export const Catalog = ({hideFilter}: TCatalogProps) => {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {hideFilter !== true && <CatalogFilter />}
      <CategoryLinks />
      <CatalogItems queryDisable={hideFilter || false} />
    </section>
  )
}