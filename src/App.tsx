import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import { BaseLayout } from './layouts/BaseLayout';

import { HomePage } from './pages/Home/HomePage';
import { Page404 } from './pages/404/Page404';
import { ContactsPage } from './pages/Contacts/ContactsPage';
import { AboutPage } from './pages/About/AboutPage';
import { CartPage } from './pages/Cart/CartPage';
import { CatalogPage } from './pages/Catalog/CatalogPage';
import { ProductPage } from './pages/ProductCard/ProductPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={BaseLayout}>
        <Route index Component={HomePage} />
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/catalog" Component={CatalogPage} />
        <Route path="/catalog/:id" Component={ProductPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contacts" Component={ContactsPage} />
        <Route path="*" Component={Page404} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
