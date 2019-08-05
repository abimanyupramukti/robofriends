import React from 'react'
import 'tachyons'

const SearchBox = ({searchField, searchChange})=>{
    return(
        <div className='pa3'>
            <input 
            type='search'
            placeholder='search robot'
            className='pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;