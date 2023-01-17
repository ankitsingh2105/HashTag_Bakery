import React from 'react'
import Home from "./Components/Files/Home/Home";
import Products from "./Components/Files/About Section/Product";
import { Suspense } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import Contact from "./Components/Files/Contact/Contact"
export default function Layout(props) {
    return (
        <>
            <Home />
            <Products />
            <Suspense className='App' fallback={<div className='align' style={{margin : "100px 0px"}} >
                <SyncLoader size={'20px'} color='#FF5757' className='loader App' /></div>}>
                {props.children}
            </Suspense>
            <Contact />
        </>
    )
}
