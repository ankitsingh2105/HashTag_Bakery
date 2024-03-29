import "./Product.css";
import { Link } from 'react-router-dom'
import images from "./TypesOfCakes/assets/cake21.jpeg";
import image1 from "./TypesOfCakes/assets/cake53.jpeg";
import image2 from "./TypesOfCakes/assets/cake61.jpeg";
import image3 from "./TypesOfCakes/assets/cake81.jpeg";
import image4 from "./TypesOfCakes/assets/cake78.jpeg";
import flower16 from './TypesOfCakes/assets/flower16.jpeg'
export default function About(props) {
    return (
        <>
            <div className="SecondPage" id={props.id}>

                {/* TODO : floating button */}
                <div className="go">
                    <Link to="/cart">
                        🛒
                    </Link>
                </div>

                {/* Menu */}
                <div className="align productjsx" >
                    <h1>Menu</h1>
                    <strong>Click on the image to see the list</strong>
                </div>

                {/* links */}
                <div className="align" >
                    <div className="container331" >
                        <div className="align">
                            <Link to="/" className="menulink con112 ">
                                <img loading="lazy" src={images} alt="" className='img12' />
                            </Link>
                            <div className='pdt_name' >Same Day Cakes</div>
                        </div>

                        <div className="align">
                            <Link to='/Customization' className="menulink con112">
                                <img loading="lazy" src={image1} alt="" className='img12' />
                            </Link>
                            <div className='pdt_name' >Customization Cakes</div>
                        </div>

                        <div className="align">
                            <Link to='/Anniversary' className="menulink con112">
                                <img loading="lazy" src={image2} alt="" className='img12' />
                            </Link>
                            <div className='pdt_name' >Anniversary Cakes</div>
                        </div>
                        <div className="align">
                            <Link to='/Surprise' className="menulink con112">
                                <img loading="lazy" src={image3} alt="" className='img12' />
                            </Link>
                            <div className='pdt_name' >Surprise Cakes</div>
                        </div>

                        <div className="align">
                            <Link to='/Birthday' className="menulink con112">
                                <img loading="lazy" src={image4} alt="noImage" className='img12' />
                            </Link>
                            <div className='pdt_name' >Birthday Cakes</div>
                        </div>
                        <div className="align">
                            <Link to='/Flowers' className="menulink con112">
                                <img loading="lazy" src={flower16} alt="" className='img12' />
                            </Link>
                            <div className='pdt_name' >Flowers</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}