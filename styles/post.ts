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

.notion-code  {
  background: ${({theme}) => theme.code};

  overflow: hidden;
}

.constant {
  color: #e09a00;
}

.string{
  color: #c4b50a;
}
.punctuation {
    color: ${({theme}) => theme.text};
  }
.keyword, .function {
  color: #5294ff;
}

`