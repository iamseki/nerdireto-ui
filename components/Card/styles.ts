import styled from 'styled-components'

export const Container = styled.div`
  .MuiCard-root {
    background: ${({theme}) => theme.listBackground};
    
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