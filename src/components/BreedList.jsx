import React, { useContext } from 'react'

import BreedContext from '../state/BreedContext'

const BreedList = (props) => {

    let breedInput = props.list.map((element, index) => {
        return <li key={index}>{element}</li>
    })

  return (
    <div className='container'>
        <h2 className='body-titles'>Breed List</h2>
        <ul>{breedInput}</ul>
    </div>
  )
}

export default BreedList
