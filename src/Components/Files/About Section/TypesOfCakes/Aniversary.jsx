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
import CakeCard from '../CakeCard'
const pdtArray = [{
    id: '32',
    name: "Anniversary cake",
    images: image60
},
{
    id: '33',
    name: "Anniversary cake",
    images: image61
},
{
    id: '134',
    name: "Anniversary cake",
    images: image62
},
{
    id: '34',
    name: "Anniversary cake",
    images: image63
},
{
    id: '35',
    name: "Anniversary cake",
    images: image64
},
{
    id: '36',
    name: "Anniversary cake",
    images: image65
},
{
    id: '37',
    name: "Anniversary cake",
    images: image66
},
{
    id: '38',
    name: "Anniversary cake",
    images: image67
},
{
    id: '39',
    name: "Anniversary cake",
    images: image68
},
{
    id: '40',
    name: "Anniversary cake",
    images: image69
},]
export default function Anniversary(props) {
    return(
        <>
            <CakeCard pdtArray={pdtArray} title="Anniversary Cakes"  />
        </>
    )
}