import homeImage from "./Hashtag.png";
import main_image from "./main_image.png"
import "./main.css";
export default function Home(props) {
    const {id} =props;
    const scroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <nav className="nav_section"  id = {id}>
                <div className="logo">
                    <img src={homeImage} className='mainImage' alt="" />
                </div>
                <div className="items">
                    <li onClick={() => {scroll("home")}} className="list list1">Home</li>
                    <li onClick={() => {scroll("products")}} className="list">Our Products</li>
                    <li onClick={() => {scroll("reviews")}} className="list">Reviews</li>
                    <li onClick={() => {scroll("contact")}} className="list"><a href="tel:9650988301">Contact</a></li>
                </div>
                <div className="logo2">
                    <img src={homeImage} className='mainImage2' alt="" />
                </div>
            </nav>
            <main className="firstPage" >
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