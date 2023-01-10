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
import { useContext  , useState , useEffect } from "react"
import { PdtList } from "../Cart/Cart"
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