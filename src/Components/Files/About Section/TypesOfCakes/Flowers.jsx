import flower11 from './assets/flower11.jpeg'
import flower12 from './assets/flower12.jpeg'
import flower13 from './assets/flower13.jpeg'
import flower14 from './assets/flower14.jpeg'
import flower15 from './assets/flower15.jpeg'
import flower17 from './assets/flower16.jpeg'
import flower18 from './assets/flower18.jpeg'
import CakeCard from '../CakeCard'
const pdtArray = [
    {
        id: '93',
        name: " Flower",
        images: flower11
    },
    {
        id: '94',
        name: "  Flower",
        images: flower12
    },
    {
        id: '95',
        name: " Flower",
        images: flower13
    },
    {
        id: '96',
        name: "  Flower",
        images: flower14
    },
    {
        id: '97',
        name: " Flower",
        images: flower15
    },
    {
        id: '985',
        name: " Flower",
        images: flower17
    },
    {
        id: '958',
        name: " Flower",
        images: flower18
    },
]
export default function Flower(props) {
    return (
        <>
            <CakeCard title="Flowers" pdtArray={pdtArray} />
        </>
    )
}