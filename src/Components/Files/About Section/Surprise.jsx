import image72 from './assets/cake72.jpeg'
import image73 from './assets/cake73.jpeg'
import image74 from './assets/cake74.jpeg'
import image75 from './assets/cake75.jpeg'
import image76 from './assets/cake76.jpeg'
import image77 from './assets/cake77.jpeg'
import image78 from './assets/cake78.jpeg'
import image79 from './assets/cake79.jpeg'
import Cake from './Cake'
export default function Surprise(props) {
    const { title } = props;
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                <Cake id='47' images={image78} name="Micky Mouse Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='46' images={image77} name="Dearful Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='41' images={image72} name="Golden  Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='42' images={image73} name="Butterscotch  Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='43' images={image74} name="Colourful  Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='44' images={image75} name="Rossy  Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='45' images={image76} name="Golden Choco Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='48' images={image79} name="Jungle  Cake" bold="Rs 345" cut="Rs 634" />
                </div>
            </main>
        </>
    )
}