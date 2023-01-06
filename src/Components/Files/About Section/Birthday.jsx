import image80 from './assets/cake80.jpeg'
import image81 from './assets/cake81.jpeg'
import image82 from './assets/cake82.jpeg'
import image83 from './assets/cake83.jpeg'
import Cake from './Cake'
export default function Anniversary(props) {
    const { title } = props;
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                <Cake id='52' images={image80} name="Doll Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='53' images={image81} name="Mixed Platte Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='54' images={image82} name="Pinata  Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='55' images={image83} name="Bomb  Cake" bold="Rs 345" cut="Rs 634" />
                </div>
            </main>
        </>
    )
}