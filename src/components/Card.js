import React from 'react'
import 'tachyons'

const Card = ({robot}) =>{
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${robot.id}?200x200`} alt=''></img>
            <div>
                <h3>{robot.name}</h3>
                <p>{robot.email}</p>
            </div>
        </div>
    )
}

export default  Card;