import { useRef, useContext, useState, useEffect } from "react";
import { Number } from "../Cart/Cart"
import "./Product.css"
export default function Cake(props) {
  const { name, images, bold, cut, Add_Products, id } = props;
  const state = useRef(null);
  const ButtonState = () => {
    state.current.innerHTML = "Added to Cart"
    state.current.style.background = "orange";
    state.current.style.color = "white";
    state.current.disabled = true;
  }
  const { itemNumber, setitemNumber } = useContext(Number)
  let jsonArray = JSON.parse(localStorage.getItem("context"));
  const Increment = () => {
    setitemNumber(jsonArray.length + 1)
  }
  useEffect(() => {
    setitemNumber(jsonArray ? jsonArray.length : 0);
  }, [])
  return (
    <>
      <div className="floatingNumbers">
        {itemNumber}
      </div>
      <main className="align unique">
        <img src={images} alt="" />
        <h1>{name}</h1>
        <div className="align2">
          <small>Rs {bold}</small>
          <small style={{ margin: "0px 10px" }}></small>
          <small style={{ "fontSize": "15px", textDecoration: "line-through" }}>
            Rs {cut}
          </small>
        </div>
        <button ref={state} onClick={() => { Add_Products(name, images, id); ButtonState(); Increment() }} style={{ margin: "10px 0px" }}>
          Add to Cart
        </button>
      </main>
    </>
  );
}
