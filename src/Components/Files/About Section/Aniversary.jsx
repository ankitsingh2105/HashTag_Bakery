import image60 from './assets/cake60.jpeg'
import image61 from './assets/cake61.jpeg'
import image62 from './assets/cake62.jpeg'
import image63 from './assets/cake63.jpeg'
import image64 from './assets/cake64.jpeg'
import image65 from './assets/cake65.jpeg'
import image66 from './assets/cake66.jpeg'
import image67 from './assets/cake67.jpeg'
import image68 from './assets/cake68.jpeg'
import image69 from './assets/cake69.jpeg'
import Cake from './Cake'
export default function Anniversary(props) {
    const { title } = props;
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                <Cake id='32' images={image60} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='33' images={image61} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='134' images={image62} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='34' images={image63} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='35' images={image64} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='36' images={image65} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='37' images={image66} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='38' images={image67} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='39' images={image68} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                <Cake id='40' images={image69} name="Anniversary Cake" bold="Rs 345" cut="Rs 634" />
                </div>
            </main>
        </>
    )
}