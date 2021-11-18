import { useState, useContext } from 'react'
import styled from 'styled-components'
import { TagContext } from '../lib/TagContextProvider';
import {  TagInputForm } from './TagInputForm';
import minus from '../img/minus.png'
import plus from '../img/plus.png'

export const ProfileCard = ({ profile }) => {
  const [openGrade, setOpenGrade] = useState(false)
  const [tagStore,] = useContext(TagContext)
  const totalGrade = profile.grades.reduce((prev, act) => +prev + +act) / profile.grades.length
    return (
      <Card key={profile.id}>
        <Img src={profile.pic} alt="Alt"></Img>
        <TextContainer>
          <Title>{`${profile.firstName} ${profile.lastName}`}</Title>
          <Info>
            <p>email: {profile.email}</p>
            <p>company: {profile.company}</p>
            <p>skill: {profile.skill}</p>
            <p>average: {totalGrade}%</p>
            {openGrade && profile.grades.map((item, index) => <Grade>Test {index + 1}  {item}%</Grade>)}
            <TagWrapper>
              {tagStore[profile.id] && tagStore[profile.id].map((item, id) => <Tag key={id}>{item}</Tag>)}
            </TagWrapper>
            <TagInputForm id={profile.id} />
          </Info>
        </TextContainer>
        <ButtonWrapper>
          <Button onClick={() => setOpenGrade((state)=>!state)}>
            {openGrade? <ImgButton src={minus} alt='minus'/> : <ImgButton src={plus} alt='plus' /> } 
          </Button>        
        </ButtonWrapper>
      </Card>
    )
}
;

const ImgButton = styled.img`
width:30px;
height:30px;
`
const Card = styled.div`
display:flex;
align-items:flex-start;
font-size: 35px;
border-bottom: 1px solid lightgrey;
`
const Info = styled.div`
color:black;
padding-left:50px;
font-size: 16px;
`
const Img = styled.img`
margin-top:40px;
height:100px;
border-radius: 100px;
border: 1px solid grey;
`
const Title = styled.h2`
margin:0px 20px;
`
const Button = styled.button`
margin: 20px;
border: 0px;
background-color: white;
`
const ButtonWrapper = styled.div`
display:flex;
`

const TagWrapper = styled.div`
display:flex;
`

const Tag = styled.span`
background-color:lightgrey;
margin: 5px;
padding:8px;
`
const TextContainer = styled.div`
width:600px

`
const Grade = styled.p`
margin:5px 0px;
`