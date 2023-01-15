import image80 from './assets/cake80.jpeg'
import image81 from './assets/cake81.jpeg'
import image82 from './assets/cake82.jpeg'
import image83 from './assets/cake83.jpeg'
import CakeCard from '../CakeCard'
const pdtArray = [
    {
        id: '52',
        name: "Doll cake",
        images: image80
    },
    {
        id: '53',
        name: "Mixed Platte cake",
        images: image81
    },
    {
        id: '54',
        name: "Pinata cake",
        images: image82
    },
    {
        id: '55',
        name: "Bomb cake",
        images: image83
    },
]
export default function Anniversary(props) {
    return(
        <>
            <CakeCard pdtArray={pdtArray}  />
        </>
    )
}