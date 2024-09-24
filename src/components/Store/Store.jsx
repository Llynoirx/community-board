import React from "react";
import "./Store.css"
import Button from '../Button/Button'

const Store = ({img, name, location, url}) =>  {
    const handleClick = () => {
        console.log('clicked')
        window.open(url, '_blank'); 
    }
    return (
        <div className='store-card'>
            <img className='store-img' src={img} alt={name}/>
            <h2 className='store-name'>{name}</h2>
            <h3 className='store-location'>{location}</h3>
            <Button onClick={handleClick}>See Menu!</Button>
        </div>
    )
}

export default Store;