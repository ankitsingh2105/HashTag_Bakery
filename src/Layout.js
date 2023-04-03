import React, { lazy, useRef } from "react";
import { Suspense } from "react";
import "./index.css";
import SyncLoader from "react-spinners/SyncLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
const Home = lazy(() => import("./Components/Files/Home/Home"));
const Products = lazy(() => import("./Components/Files/About Section/Product"));
const Contact = lazy(() => import("./Components/Files/Contact/Contact"));
const Reviews = lazy(() => import("./Components/Files/Reviews/Review"));

export default function Layout(props) {
  const homeRef = useRef(null);

  const scrollSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Suspense
        fallback={
          <div
            className="align33"
            style={{ margin: "250px 0px" }}
          >
            <PacmanLoader size={"40px"} color="orangered" className="" />
          </div>
        }
      >
        <Home home={() => scrollSection(homeRef)} ref={homeRef} />
        <Products />
        <Suspense
          fallback={
            <div
              className="align33"
              style={{ margin: "100px 0px" }}
            >
              <SyncLoader
                size={"20px"}
                color="orange"
                className="loader App"
              />
            </div>
          }
        >
          {props.children}
        </Suspense>
        <Reviews />
        <Contact />
      </Suspense>
    </>
  );
}
