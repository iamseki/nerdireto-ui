import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
padding: 17px; 
margin: 24px;

.notion-quote, [class^='language'] {
  color: ${({theme}) => theme.text}
}

.notion-code {
  background: ${({theme}) => theme.listBox}
}
`