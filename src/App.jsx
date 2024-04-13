import styled from "@emotion/styled";
import fondo from "../src/assets/fondo.svg";


const Fondo = styled.img`
  background-image: url("src/assets/GroupLadingPage.svg");
  width: ;
  height: ;
`;

function App() {
  return (
    <>
      <Fondo src={fondo} alt="fondo" />
    </>
  );
}

export default App;