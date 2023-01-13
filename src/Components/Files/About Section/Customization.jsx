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
import { PdtList } from "../Cart/Cart"
import "./Product.css"
import { useContext, useState, useEffect } from 'react'
const pdtArray = [
    {
        id: '17',
        name: "2 year Cake",
        images: image21
    },

    {
        id: '18',
        name: "2 tire car",
        images: image22
    },

    {
        id: '19',
        name: "Classic Cake",
        images: image23
    },

    {
        id: '20',
        name: "Car Theme Cake",
        images: image24
    },

    {
        id: '21',
        name: "Miss You Cake",
        images: image25
    },

    {
        id: '23',
        name: "Miss you cake",
        images: image26
    },
    {
        id: '24',
        name: "Black Forest cake",
        images: image28
    },
    {
        id: '25',
        name: "Unicorn cake",
        images: image29
    },
    {
        id: '28',
        name: "Jungle Theme cake",
        images: image44
    },
    {
        id: '29',
        name: "Kids cake",
        images: image45
    },
    {
        id: '30',
        name: "Forest cake",
        images: image46
    },
    {
        id: '31',
        name: "Boy cake",
        images: image47
    },
]
export default function SameDay(props) {
    const data = useContext(PdtList);
    const { title } = props;
    const [list, setlist] = useState([]);
    const newList = localStorage.getItem("context");
    useEffect(() => {
        setlist(newList !== null ? JSON.parse(newList) : data)
    }, [])
    const newFunction = (name, images, id) => {
        let tobeset = { name, images, id };
        setlist([...list, tobeset]);
    }
    useEffect(() => {
        let uniqueList = [...new Set(list.map(item => item.id))].map(id => list.find(item => item.id === id));
        localStorage.setItem('context', JSON.stringify(uniqueList));
    }, [list])
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                    {
                        pdtArray.map((e) => {
                            const { name, images, id } = e;
                            return (
                                <Cake key={id} name={name} images={images} cut="470" bold="370"
                                    Add_Products={() => newFunction(name, images, id)} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}