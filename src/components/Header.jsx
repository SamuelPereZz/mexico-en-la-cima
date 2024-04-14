import styled from "@emotion/styled";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  background-color: #ffffff;
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  width: 100%;
  max-height: 6rem;
  @media (max-width: 500px) {
    justify-content: space-between;
    padding: 5px 2rem;
  }
`;

const LinkNav = styled(NavLink)`
  filter: drop-shadow(4px 4px 8px #ffffffa0);
  :hover {
    filter: drop-shadow(4px 4px 8px #e8eef69f);
  }
`;

const Logo = styled.img`
  width: auto;
  height: 100px;
  transition: all 0.8s;
  object-fit: cover;
  border-radius: 16px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 450px) {
    max-width: 80px;
    max-height: 80px;
  }
`;

function Header() {
  return (
    <>
      <Wrapper>
        <LinkNav to={"/"}>
          <Logo src={logo} alt="Logo" />
        </LinkNav>
        <Navbar />
      </Wrapper>
    </>
  );
}
export default Header;
