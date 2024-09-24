import React from "react";
import "./Store.css"
import Button from '../Button/Button'

const Store = ({img, name, location, url}) =>  {
    const handleClick = () => {
        console.log('Button clicked!')
    }
    return (
        <div className='Store'>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <Button onClick={handleClick}> Click Me! </Button>
        </div>
    )
}

export default Store;