import image72 from './assets/cake72.jpeg'
import image73 from './assets/cake73.jpeg'
import image74 from './assets/cake74.jpeg'
import image75 from './assets/cake75.jpeg'
import image76 from './assets/cake76.jpeg'
import image77 from './assets/cake77.jpeg'
import image78 from './assets/cake78.jpeg'
import image79 from './assets/cake79.jpeg'
import CakeCard from "../CakeCard"
const pdtArray = [
    {
        id: '46',
        name: "Dearful cake",
        images: image77
    },
    {
        id: '47',
        name: "Micky Mouse cake",
        images: image78
    },
    {
        id: '48',
        name: "Jungle cake",
        images: image79
    },
    {
        id: '41',
        name: "Golden cake",
        images: image72
    },
    {
        id: '42',
        name: "Butterscotch cake",
        images: image73
    },
    {
        id: '43',
        name: "Colourful cake",
        images: image74
    },
    {
        id: '44',
        name: "Rossy cake",
        images: image75
    },
    {
        id: '45',
        name: "Golden Choco cake",
        images: image76
    },
]
export default function SameDay(props) {
    return(
        <>
            <CakeCard pdtArray={pdtArray} title="SameDay Cakes"  />
        </>
    )
}