import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
padding: 17px; 
margin: 24px;

.notion-quote, [class^='language'], .notion-list {
  color: ${({theme}) => theme.text}
}

.notion-code {
  background: ${({theme}) => theme.listBox}

}

.constant {
  color: #e09a00;
}

.string{
  color: #b1a940;
}

.function{
  color: #fa02ff;
}

.keyword{
  color: #001bea;
}

`