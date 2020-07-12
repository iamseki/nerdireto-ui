import styled from 'styled-components'

export const Container = styled.div`
  .MuiCard-root {
    background: ${({theme}) => theme.listBackground};
    transition: background 0.3s;
  }

  .MuiButtonBase-root :hover {
    background: ${({theme}) => theme.listBox};
  }

  p {
    color: ${({theme})=> theme.textModal}
  }
  a {
    text-decoration: none;
    color: ${({theme})=> theme.textModal};
    font-style: italic;
    font-weight: bold;
  }
`

export const TagBox = styled.div`
  display: grid;
  align-items: center;
  justify-content:center;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 17px;
  row-gap: 1em;
  p{
    font-size: 12px;
    font-style: italic;
    padding: 4px;
    background: ${({theme})=> theme.tag};
    border-radius: 24px;
    text-align:center;
    letter-spacing: 1px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s;
  }
  p :hover {
    opacity: 0.5;
  }
`