import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.text};
`

export const Form = styled.form`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 7%;
  svg {
    align-self: stretch;
    cursor: pointer;
  }
  input {
    width: 50%;
    height: 43px;
    border-radius: 7px;
    text-align: center;
    background-color: ${({theme}) => theme.input};
    border: 0;
    padding: 17px;
    margin: 17px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`