import styled from 'styled-components'

function Title() {
    return (
        <titleBorder >
            <newTitle>
                Miss Danaher's Marvelous Muggles!
            </newTitle>
        </titleBorder>
    )
}
export default Title

const titleBorder = styled.section`
    padding: 4em;
`
const newTitle = styled.h1`
  font-size: 60px;
  text-align: center;
  color: palevioletred;
`;