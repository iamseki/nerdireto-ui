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