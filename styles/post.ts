import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
padding: 17px; 
margin: 24px;

.notion-hr {
  border-color: ${({theme}) => theme.hr};
}

.notion-quote, [class^='language'], .notion-list {
  color: ${({theme}) => theme.text}
}

.notion-code, .notion-callout, .constant  {
  background: ${({theme}) => theme.code};
  
  overflow: hidden;
}

.string{
  color: ${({theme}) => theme.string}
}
.punctuation, .operator, .number, #text{
    color: ${({theme}) => theme.text};
  }
.keyword, .function, .constant {
  color: #5294ff;
}

`