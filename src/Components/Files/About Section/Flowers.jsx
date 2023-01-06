import flower11 from './assets/flower11.jpeg'
import flower12 from './assets/flower12.jpeg'
import flower13 from './assets/flower13.jpeg'
import flower14 from './assets/flower14.jpeg'
import flower15 from './assets/flower15.jpeg'
import flower17 from './assets/flower16.jpeg'
import flower18 from './assets/flower18.jpeg'
import Cake from "./Cake";
import "./Product.css"
export default function Flowers(props) {
    const { title } = props;
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                <Cake id='93' images={flower12} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                <Cake id='94' images={flower13} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                <Cake id='95' images={flower14} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                <Cake id='96' images={flower15} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                <Cake id='97' images={flower11} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                <Cake id='985' images={flower17} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                <Cake id='958' images={flower18} name="Flower Bouquet" bold="Rs 345" cut="Rs 634" />
                </div>
            </main>
        </>
    )
}