import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;

  svg {
    cursor: pointer;
  }
  strong {
    letter-spacing: 1px;
    transition: letter-spacing 0.3s;
    &:hover {
      letter-spacing: 4px;
    }
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  width: 40%;

  div {
    display: inline-block;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
  div::after {
    content: '';
    display: block;
    width: 0;
    height: 1.5px;
    background: ${({theme}) => theme.text};
    transition: width .3s;
  }
  div:hover::after{
    width: 100%;
    transition: width .3s;
  }
`