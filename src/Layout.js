import React, { lazy } from "react";
import { Suspense } from "react";
import "./index.css";
import SyncLoader from "react-spinners/SyncLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
const Home = lazy(() => import("./Components/Files/Home/Home"));
const Products = lazy(() => import("./Components/Files/About Section/Product"));
const Contact = lazy(() => import("./Components/Files/Contact/Contact"));
const Reviews = lazy(() => import("./Components/Files/Reviews/Review"));
const Information = lazy(() => import("./Components/Files/Information/Information"));

export default function Layout(props) {
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
        <Home id="home" />
        <Products id="products" />
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
        <Information/>
        <Reviews id="reviews" />
        <Contact />
      </Suspense>
    </>
  );
}
