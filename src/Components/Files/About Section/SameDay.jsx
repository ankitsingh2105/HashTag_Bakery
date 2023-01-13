import "./Product.css"
import image72 from './assets/cake72.jpeg'
import image73 from './assets/cake73.jpeg'
import image74 from './assets/cake74.jpeg'
import image75 from './assets/cake75.jpeg'
import image76 from './assets/cake76.jpeg'
import image77 from './assets/cake77.jpeg'
import image78 from './assets/cake78.jpeg'
import image79 from './assets/cake79.jpeg'
import Cake from "./Cake";
import { PdtList } from "../Cart/Cart"
import { useContext , useState , useEffect } from "react"
const pdtArray = [
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
]
export default function SameDay(props) {
    const data = useContext(PdtList);
    const { title } = props;
    const [list, setlist] = useState([]);
    const newList = localStorage.getItem("context");
    useEffect(()=>{
        setlist(newList !== null ? JSON.parse(newList) : data)
    },[])
    const newFunction = (name, images, id) => {
        let tobeset = { name, images, id };
        setlist([...list , tobeset]);
    }
    useEffect(()=>{
        let uniqueList = [...new Set(list.map(item => item.id))].map(id => list.find(item => item.id === id));
        localStorage.setItem('context', JSON.stringify(uniqueList));
    },[list])
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