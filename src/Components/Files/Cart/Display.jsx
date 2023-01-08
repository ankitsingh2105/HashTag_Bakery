import React, { useContext } from 'react'
import { PdtList } from './Cart'
import Card from "./Card"
import "./Display.css"
export default function Display(props) {
    let list = useContext(PdtList);
    let newlist = [];
    let array = localStorage.getItem('context');
    if (array != null) {
        newlist = JSON.parse(array);
    }
    else {
        newlist = [];
    }
    console.log("new list ->  ", newlist)
    const SendInfo = () => {
        let message = `Hello there I have an order" + %0a`;
        let index = 1;
        list.forEach(e => {
            message += `${index} + "  ->  " + ${e.name} + %0a`;
            index++;
        });
        let Message = `"https://wa.me/919650988301?text=" + ${message}`;
        window.open(Message, '_blank').focus();
    }
    const DeleteItem = (e) => {
        console.log("this this shit -> ", e);
        let newShit = [];
        newlist.forEach((e1)=>{
            if(e1.id !== e){
                console.log("found shit -> " , e1.id);
                newShit.push(e1);
            }
        })
        newlist = newShit
        console.log("bawa-> ",newShit);
        localStorage.setItem('context' , JSON.stringify(newlist));
    }
    return (
        <>
            <h4 className='align'>Thanks for visiting</h4>
            {
                newlist.map((e) => {
                    const { id } = e;
                    return <Card key={id} id={id} DeleteItem={() => DeleteItem(id)}  {...e} />
                })
            }
            <div className="align buttonOrder" style={{ "marginTop": "60px" }} >
                <button style={{ "fontSize": "20px" }} onClick={SendInfo}>Order Now</button>
            </div>
        </>
    )
}
