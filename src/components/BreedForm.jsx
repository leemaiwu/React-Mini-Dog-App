import React, { useState } from 'react'

const BreedForm = (props) => {

  const [ userInpuer, setUserInput ] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.inputBreed(userInpuer)
    setUserInput('')
  }

  const changeHandler = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div className='center-form'>
        <form className='form' onSubmit={submitHandler} >
            <h2 className='body-titles'>What's your favorite dog breed?</h2>
            <div>
              <input type='text' placeholder='Dog Breed' value={userInpuer} onChange={changeHandler} />
              <button>Add</button>
            </div>
        </form>
    </div>
  )
}

export default BreedForm
