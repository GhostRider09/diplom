import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainBanner } from "../components/Banners/MainBanner";

export function BaseLayout() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <MainBanner imagePath="/img/banner.jpg" title="К весне готовы!" />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}