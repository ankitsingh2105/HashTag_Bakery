import "./Product.css"
export default function Cake(props) {
    const { name, images, bold, cut } = props;
    return (
        <>
            <main className="align unique">
                <img src={images} alt="" />
                <h1>{name}</h1>
                <div className="align2">
                    <small>{bold}</small>
                    <small style={{ "margin": "0px 10px" }} ></small>
                    <small style={{ "font-size": "15px", "textDecoration": "line-through" }} >{cut}</small>
                </div>
                <button style={{ "margin": "10px 0px" }}>Add to Cart</button>
            </main>
        </>
    )
}