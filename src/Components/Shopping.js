import React, { Suspense, lazy } from "react";

import loadingIcon from "../assets/images/dashboardloader3.gif";
const NavBar = lazy(() => import("./Navigation/NavBar"));
const Footer = lazy(() => import("./Navigation/Footer"));
const HeroImage = lazy(() => import("./Navigation/HeroImage"));
const Products = lazy(() => import("./Products"));

export default function Shopping(props) {
  const collectionname = props.match.params.collectionname;

  return (
    <div>
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        <NavBar />

        <HeroImage />

        <Products collectionname={collectionname} />

        <Footer />
      </Suspense>
    </div>
  );
}
