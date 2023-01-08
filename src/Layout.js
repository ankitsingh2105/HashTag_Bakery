import React from 'react'
import Home from "./Components/Files/Home/Home";
import Products from "./Components/Files/About Section/Product";
export default function Layout(props) {
    return(
        <>
            <Home />
            <Products />
            {props.children}
        </>
    )
}