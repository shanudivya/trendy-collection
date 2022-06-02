import React, { Suspense } from "react";
import "../styles/Homepage.scss";



import "bootstrap/dist/css/bootstrap.min.css";
import loadingIcon from "../assets/images/dashboardloader3.gif";

const NavBar = React.lazy(() => import("./Navigation/NavBar"));
const Footer = React.lazy(() => import("./Navigation/Footer"));
const SecondaryIntro = React.lazy(() => import("./Intro/SecondaryIntro"));
const ProductCategories = React.lazy(() => import("./ProductCategories"));
const HeroText = React.lazy(() => import("./Navigation/HeroText"));

export default function () {
  return (
    <div>
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        <NavBar />

        <HeroText />

        <SecondaryIntro />

        <ProductCategories />

        <Footer />
      </Suspense>
    </div>
  );
}
