import { useRef } from "react";
export default function Cake(props) {
  const { name, images, bold, cut, Add_Products , id } = props;
  const state = useRef(null);
  const ButtonState = () => {
    state.current.innerHTML = "Added to Cart"
    state.current.style.background = "orange";
    state.current.style.color = "white";
    state.current.disabled = true;
  }
  return (
    <>
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
        <button ref={state} onClick={() => { Add_Products(name, images, id); ButtonState(); }} style={{ margin: "10px 0px" }}>
          Add to Cart
        </button>
      </main>
    </>
  );
}
