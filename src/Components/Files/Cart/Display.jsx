import React, { useEffect, useState } from 'react'
import Card from "./Card"
import "./Display.css"
export default function Display(props) {
    const [newlist, setnewlist] = useState([])
    const array = localStorage.getItem('context');
    useEffect(() => {
        setnewlist(newlist !== null ? JSON.parse(array) : []);
    },[])
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
        newlist.forEach((e1) => {
            if (e1.id !== e) {
                tempArray.push(e1);
            }
        })
        setnewlist(tempArray);
    }
    useEffect(() => {
        localStorage.setItem('context', JSON.stringify(newlist));
    }, [newlist])
    return (
        <>
            <h4 className='align'>Thanks for visiting</h4>
            {
                newlist.map((e) => {
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
