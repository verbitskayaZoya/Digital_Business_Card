import styled from "styled-components"

export const Text = styled.p`
    line-height: 24px;
    color: ${ ({$accent}) => $accent ? "#F3BF99" : "#DCDCDC" }
`

