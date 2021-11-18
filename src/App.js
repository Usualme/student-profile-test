import {useState, useContext} from 'react'
import { useProfile } from './hooks/useProfile'
import {  ProfileList } from './components/ProfileList'
import { SearchField } from './components/SearchField'
import styled from 'styled-components'
import { TagContext } from './lib/TagContextProvider'


export const App = () => {

  const [inputName, setInputName] = useState('')
  const [inputTag, setInputTag] = useState('')
  const { isSuccess, isLoading, data } = useProfile()
  const [storeTag] = useContext(TagContext)

  let filteredData = data && data.students.filter((student) => {

    const tagInclude = storeTag[student.id] && storeTag[student.id].findIndex((item) => item.toUpperCase().startsWith(inputTag.toUpperCase()))
    
    return ((student.firstName.toUpperCase().startsWith(inputName.toUpperCase()) ||
      student.lastName.toUpperCase().startsWith(inputName.toUpperCase())) && (inputTag ? tagInclude >= 0 : true))
  });

  return (
    <Wrapper>
      <ScrollWrapper>
        <SearchWrapper>
          <SearchField
            placeholder={'Search by lastName'}
            input={inputName}
            setInput={setInputName} />
          <SearchField
            placeholder={'Search by tag'}
            input={inputTag}
            setInput={setInputTag} />
        </SearchWrapper>
        <AppWrapper className="App">
          {isLoading && <h2>...Loading</h2>}
          {isSuccess && <ProfileList data={filteredData} />}
        </AppWrapper>
      </ScrollWrapper>
    </Wrapper>
  );
};
const AppWrapper = styled.div`
width: 800px;
overflow-x: hidden;
height:560px;
padding: 15px;
background-color: white;
`
const ScrollWrapper = styled.div`
border-radius: 10px;
padding: 120px 0px 6px 0px;
background-color: white;
`
const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
height:100vh;
width: 100vw;
background-color:rgb(232,232,232);
`
const SearchWrapper = styled.div`
position:absolute;
top:120px;
width:800px;
padding:10px;
`