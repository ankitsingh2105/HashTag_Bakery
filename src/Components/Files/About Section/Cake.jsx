import { useRef, useContext , useEffect } from "react";
import { Number } from "../Cart/Cart"   
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Product.css"
import temp from "./TypesOfCakes/assets/temp.jpg"
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
  const Increment = () => {
    let jsonArray = JSON.parse(localStorage.getItem("context"));
    setitemNumber(jsonArray.length + 1)
  }
  const Increment2 = () => {
    let jsonArray = JSON.parse(localStorage.getItem("context"));
    setitemNumber(jsonArray ? jsonArray.length : 0);
  }
  useEffect(() => {
    Increment2();
  },[])
  return (
    <>
      <div className="floatingNumbers">
        {itemNumber}
      </div>
      <main className="align unique">
        <LazyLoadImage effect="blur" placeholderSrc={temp} src={images} alt="" />
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
