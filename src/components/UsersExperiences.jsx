import styled from "@emotion/styled";
import section from "../assets/section.svg";
import { Button1 } from "./Buttons";
import CardExperiences from "./CardsExperiences";

const Fondo = styled.div`
  background-image: url(${section});
  background-size: cover;
  background-position: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 64px 10px;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: #fff;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 38px;
  filter: drop-shadow(-2px 4px 8px #dadada6c);

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;




function UsersExperiences() {
  return (
    <Fondo>
      <CardExperiences/>
      <Container>
        <Title>Learn about the experience of our travelers</Title>
        <Button1 style={{ width: 180, fontSize: 20 }}>
          Look here
        </Button1>
      </Container>
    </Fondo>
  );
}

export default UsersExperiences;
