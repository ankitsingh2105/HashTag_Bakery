import React from 'react'
import { PdtList } from "../Cart/Cart"
import Cake from './Cake';
import { useContext, useEffect } from "react"
export default function CakeCard(props) {
    const { title, pdtArray } = props;
    const { list, setlist } = useContext(PdtList);
    const newFunction = (name, images, id) => {
        setlist([...list, { name, images, id }]);
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
