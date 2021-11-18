import { createContext, useState } from "react"


export const TagContext = createContext()

export const TagContextProvider = (props) => {
  const state = useState({})

  return (
    <TagContext.Provider value = {state}>
      {props.children}
    </TagContext.Provider>
  )
}