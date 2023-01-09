import React, { useState } from 'react'
export default function Card(props) {
    const { DeleteItem } = props;
    const [setstyle, setsetstyle] = useState({
        color: 'black',
        background: 'rgb(238, 242, 241)'
    })
    const SetState = () => {
        setsetstyle({
            display: 'none'
        })
    }
    const { id, images, name } = props;
    return (
        <div id={id} className='align displaySet' style={setstyle} >
            <main>
                <div className="border align">
                    <img src={images} alt="" />
                    <h3>{name}</h3>
                </div>
            </main>
            <button onClick={() => { DeleteItem(id); SetState(); }} >Delete</button>
        </div>
    )
}