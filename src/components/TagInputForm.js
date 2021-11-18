import { useState, useContext } from "react/cjs/react.development"
import styled from 'styled-components'
import { TagContext } from "../lib/TagContextProvider";



export const TagInputForm = ({ id }) => {

  const [inputValue, setInputValue] = useState('');
  const [, setTag] = useContext(TagContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTag((state) => {
      const oldState = state[id] ? state[id] : []
      return { ...state, [id]: [...oldState, inputValue], }
    })
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTag placeholder='Add a tag' value={inputValue} onChange={e => setInputValue(e.target.value)} />
    </form>
  )
};

const InputTag = styled.input`
  font-size: 18px;
  border:0;
  height:30px;
  width: 150px;
  border-bottom:1px solid grey;
  margin-bottom:10px;
  &:focus {
    outline: none;
  }
`