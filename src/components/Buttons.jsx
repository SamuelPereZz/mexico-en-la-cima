import styled from "@emotion/styled";

export const Button1 = styled.button`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 161px;
  padding: 2px 10px;
  height: 40px;
  background-color: #BD143D;
  border-radius: 8px;
  color: #ededed;
  border: none;
  cursor: pointer;
  &:hover {
    border: 2px solid #BD143D;
    color: #26844E;
    background-color: white;
  }
  &:active {
    background-color: #BD143D;
    color: #b2b2b2;
  }

  @media (max-width: 500px) {
    padding: 5px 10px;
  }
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 40px;
  background-color: #ededed;
  border-radius: 8px;
  border: none;
  color: #364153;

  cursor: pointer;
  &:hover {
    color: #68758b;
    border: 2px solid black;
  }
`;

export const Button3 = styled.button`
    background-color: #26844E;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 161px;
  min-height: 40px;
  background-color: none;
  border-radius: 8px;
  padding: 2px 10px;
  color: #ffffff;
  border: 1px solid #26844E;
  &:hover {
    border: 2px solid #26844E;
    background-color: #ffffff;
    color: #BD143D;

  }
  &:active {
    border: 1px solid #26844E;
    background-color: #ffffff;
    color: #BD143D;
  }
  @media (max-width: 500px) {
    min-width: 80px;
  }
`;

export const Button4 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 161px;
  padding: 2px 10px;
  height: 40px;
  background-color: #ededed;
  border-radius: 8px;
  border: 0.3px solid #364153;
  cursor: pointer;
  &:hover {
    background-color: #aebdc7;
    border: 2px solid black;
  }
`;

const Buttom = () => {
  return <Button1>SEARCH</Button1>;
};

export default Buttom;
