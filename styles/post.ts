import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
padding: 17px; 
margin: 24px;

.notion-hr {
  border-color: ${({ theme }) => theme.hr};
}

.notion-quote, [class^='language'], .notion-list {
  color: ${({ theme }) => theme.text}
}

.notion-asset-wrapper {
  margin: auto;
  border-radius: 7px;
}

.notion-code, .notion-callout, .constant  {
  background: ${({ theme }) => theme.code};

  ::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
  
  overflow: scroll;
  overflow-y: hidden;
}

.string{
  color: ${({ theme }) => theme.string};
}
.punctuation, .operator, .number, #text{
    color: ${({ theme }) => theme.text};
  }
.keyword, .constant {
  color: #5294ff;
}
.function {
  color: #c797cb;
}

`