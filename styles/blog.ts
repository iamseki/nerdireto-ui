import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 1em;
}

@media (max-width: 699px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

`
export const LoadingBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 120px;
  justify-content: center;
`