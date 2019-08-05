import React from 'react'
import Card from './Card';


const CardList = ({robots})=>{
    const cardArray = robots.map((robot,i)=>{
        return <Card robot={robot} key={i}></Card>  
    })
    return(
        <div>
            {cardArray}  
        </div>
    )
}

export default CardList;