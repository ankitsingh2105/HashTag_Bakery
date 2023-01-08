import image80 from './assets/cake80.jpeg'
import image81 from './assets/cake81.jpeg'
import image82 from './assets/cake82.jpeg'
import image83 from './assets/cake83.jpeg'
import Cake from './Cake'
import { useContext } from "react"
import { PdtList } from "../Cart/Cart"
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
    const { title } = props;
    let list =[];
    let data = useContext(PdtList);
    let newList = localStorage.getItem("context");
    if (newList !== null) {
        list = JSON.parse(newList)
    }
    else {
        list = data;
    }
    const newFunction = (name, images, id) => {
        let tobeset = { name, images, id };
        list.push(tobeset);
        localStorage.setItem('context', JSON.stringify(list));
    }
    return (
        <>
            <main className='PDT_heading align' >
                <h1>{title}</h1>
                <div className="grid_system">
                    {
                        pdtArray.map((e) => {
                            const { name, images, id } = e;
                            return (
                                <Cake key={id} name={name} images={images} cut="330" bold="250"
                                    Add_Products={() => newFunction(name, images, id)} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}