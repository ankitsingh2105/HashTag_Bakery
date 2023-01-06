import image21 from './assets/cake41.jpeg'
import image22 from './assets/cake42.jpeg'
import image23 from './assets/cake43.jpeg'
import image24 from './assets/cake44.jpeg'
import image25 from './assets/cake45.jpeg'
import image26 from './assets/cake46.jpeg'
import image28 from './assets/cake48.jpeg'
import image29 from './assets/cake49.jpeg'
import image44 from './assets/cake53.jpeg'
import image45 from './assets/cake54.jpeg'
import image46 from './assets/cake55.jpeg'
import image47 from './assets/cake57.jpeg'
import Cake from "./Cake";
import "./Product.css"
export default function SameDay(props) {
    const { title } = props;
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                <Cake id='28' images={image44} name="Jungle Theme Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='29' images={image45} name="Kids Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='30' images={image46} name="Forest Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='31' images={image47} name="Bady boy cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='17' images={image21} name="2 year Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='18' images={image22} name="2 tire car Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='19' images={image23} name="Classic Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='20' images={image24} name="Car Theme Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='21' images={image25} name="Miss You Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='23' images={image26} name="Miss you cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='24' images={image28} name="Black Forest cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='25' images={image29} name="Unicorn Cake" bold="Rs 345" cut="Rs 634" />
                </div>
            </main>
        </>
    )
}