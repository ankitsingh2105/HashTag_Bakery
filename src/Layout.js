import React, { lazy } from 'react'
import { Suspense } from "react";
import "./index.css"
import SyncLoader from "react-spinners/SyncLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
const Home = lazy(() => import("./Components/Files/Home/Home"));
const Products = lazy(() => import("./Components/Files/About Section/Product"));
const Contact = lazy(() => import("./Components/Files/Contact/Contact"))
export default function Layout(props) {
    return (
        <>
            <Suspense fallback={<div className='align' style={{ margin: "250px 0px" }} >
                <PacmanLoader size={'40px'} color='orangered' className='' /></div>}>
                <Home />
                <Products />
                <Suspense fallback={<div className='align' style={{ margin: "100px 0px" }} >
                    <SyncLoader size={'20px'} color='orange' className='loader App' /></div>}>
                    {props.children}
                </Suspense>
                <Contact />
            </Suspense>
        </>
    )
}
