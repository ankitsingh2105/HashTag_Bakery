import homeImgae from "./Hashtag.png";
import main_image from "./main_image.png"
import "./main.css";
export default function Home() {
    return (
        <>
            <nav className="nav_section" >
                <strong></strong>
                <div className="logo">
                    <img src={homeImgae} className='mainImage' alt="" />
                </div>
                <div className="items">
                    <li className="list" style={{ "margin-left": "83px" }} >Home</li>
                    <li className="list">About</li>
                    <li className="list">Contact</li>
                    <li className="list">Our Products</li>
                </div>
            </nav>
            <main>
                <div className="bakery_name" >
                    <small>Welcome to!!</small>
                    <div className="name1">
                        hashtag
                    </div>
                    <div className="name2">
                        bakery
                    </div>
                    <p>
                        Welcome to our bakery! Our team of
                         skilled bakers uses only the finest ingredients to create a wide range 
                         of treats that are sure to satisfy any sweet tooth. Thank you for choosing our bakery - we can't wait to serve you!
                    </p>
                    <button>Explore More</button>
                </div>
                <div className="image">
                    <img src={main_image} alt="" />
                </div>
            </main>
        </>
    )
}