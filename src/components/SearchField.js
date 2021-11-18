import styled from 'styled-components'

export const SearchField = ({ placeholder, input, setInput }) => {

  const onChangeHandler = (event) => {
    setInput(event.target.value)
  };
  return (
    <div>
      <Input value={input} onChange={onChangeHandler} placeholder={placeholder} />
    </div>
  )
  
};

const Input = styled.input`
  font-size: 18px;
  border:0;
  height:50px;
  width: 100%;
  border-bottom:1px solid lightgrey;
     &:focus {
        outline: none;
  `