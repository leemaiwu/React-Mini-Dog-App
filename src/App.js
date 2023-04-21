import React, { useState } from 'react'

import './App.css'
import Header from './components/Header'
import BreedForm from './components/BreedForm'
import BreedList from './components/BreedList'

function App() {

  const DUMMY_BREEDS = [
    'Golden Retriever',
    'Leonberger',
    'Keeshond',
    'Wolfhound',
    'Old English Sheepdog',
    'Norfolk Terrier'
  ]

  const [dogBreed, setDogBreed] = useState(DUMMY_BREEDS)

  const breedInput = (breed) => setDogBreed([...dogBreed, breed])

  return (
    <div className='App'>
      <Header />
      <BreedForm inputBreed={breedInput} />
      <BreedList list={dogBreed} />
    </div>
  )
}

export default App;
