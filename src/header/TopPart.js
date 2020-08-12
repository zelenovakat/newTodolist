import React from "react"
import styled from "styled-components"
import { formatDate } from "../helper/formatDate"

const TopPart = () => {
  return (
    <MainWrapper>
      <DataWrapper>
        <Title>My task</Title>
        <FormatDate>{formatDate(new Date())}</FormatDate>
      </DataWrapper>
      <MiddleLine></MiddleLine>
    </MainWrapper>
  )
}

export default TopPart
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const DataWrapper = styled.div`
  margin: 10px 20px;
`
const Title = styled.p`
  font-size: 30px;
`
const MiddleLine = styled.div`
  border-bottom: 2px solid #ded9d9;
  margin: 10px 0;
`
const FormatDate = styled.p`
  color: #ded9d9;
`
