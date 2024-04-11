import Info from "./src/components/Info"
import About from "./src/components/About"
import Interests from "./src/components/Interests"
import Footer from "./src/components/Footer"
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  background-color: #1A1B21;
`

function App() {
  return (
    <Container>
        <Info />
        <About />
        <Interests />
        <Footer />
    </Container>
  )
}

export default App
