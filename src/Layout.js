import React from 'react'
import Home from "./Components/Files/Home/Home";
import Products from "./Components/Files/About Section/Product";
import { Suspense } from "react";
import SyncLoader from "react-spinners/SyncLoader";
export default function Layout(props) {
    return (
        <>
            <Suspense className='App' fallback={
                <div className='align'>
                    <SyncLoader size={'20px'} color='#FF5757' className='loader App' />
                </div>
            }>
                <Home />
                <Products />
                {props.children}
            </Suspense>
        </>
    )
}
