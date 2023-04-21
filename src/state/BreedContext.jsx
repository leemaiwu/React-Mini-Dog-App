import { createContext, useReducer} from 'react'

const BreedContext = createContext()

const BreedContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BreedContext.Provider value={{state, dispatch}}>
        {props.children}
    </BreedContext.Provider>
  )
}

export {BreedContextProvider}
export default BreedContext
