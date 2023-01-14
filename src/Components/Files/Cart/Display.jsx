import React, { useContext, useEffect, useState } from 'react'
import Card from "./Card"
import { PdtList } from './Cart';
import "./Display.css"
export default function Display() {
    const { list, setlist } = useContext(PdtList);
    const [newList, setnewList] = useState(JSON.parse(localStorage.getItem("context")));
    const SendInfo = () => {
        let whatsApp_Array = JSON.parse(localStorage.getItem("context"));
        let message = 'Hello there! I have an order: %0a ';
        let index = 1;
        whatsApp_Array.forEach(e => {
            message += `${index}. ${e.name} (id-${e.id}) %0a `;
            index++;
        });
        let Message = `https://wa.me/919650988301?text=${message}`;
        window.open(Message, '_blank').focus();
    }
    const DeleteItem = (e) => {
        let tempArray = [];
        newList.forEach((e1) => {
            if (e1.id !== e) {
                tempArray.push(e1);
            }
        })
        setnewList(tempArray);
    }
    useEffect(() => {
        localStorage.setItem('context', JSON.stringify(newList));
        setlist(JSON.parse(localStorage.getItem("context")));
    }, [newList])
    return (
        <>
            <h4 className='align'>Thanks for visiting</h4>
            {
                newList.map((e) => {
                    const { id } = e;
                    return <Card key={id} DeleteItem={() => DeleteItem(id)}  {...e} />
                })
            }
            <div className="align buttonOrder" style={{ "marginTop": "60px" }} >
                <button style={{ "fontSize": "20px" }} onClick={SendInfo}>Order Now</button>
            </div>
        </>
    )
}
