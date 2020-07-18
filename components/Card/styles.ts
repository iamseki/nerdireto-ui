import styled from 'styled-components'

export const Container = styled.div`
  .MuiCard-root {
    background: ${({theme}) => theme.card};
    transition: background 0.3s;
  }

  .MuiButtonBase-root :hover {
    background: ${({theme}) => theme.hover};
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

  transition: transform 0.3s;

  &:hover {
    transform: translateX(-17px)
  }
`

export const TagBox = styled.div`
  display: grid;
  align-items: center;
  justify-content:center;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 17px;
  row-gap: 0.5em;
  p{
    font-size: 12px;
    font-style: italic;
    padding: 4px;
    background: ${({theme})=> theme.tag};
    border-radius: 7px;
    text-align:center;
    letter-spacing: 1px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s;
  }
  p :hover {
    opacity: 0.5;
  }
`