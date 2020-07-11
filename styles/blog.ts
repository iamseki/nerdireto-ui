import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
`
export const LoadingBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 120px;
  justify-content: center;
`