import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button1, Button2, Button3 } from "./Buttons";
import { FiSearch } from "react-icons/fi";
import { RiHome8Line, RiLogoutCircleLine, RiUserLine } from "react-icons/ri";
import { FaHouseUser } from "react-icons/fa";
import { GiMexico } from "react-icons/gi";
import { TbBrowserCheck } from "react-icons/tb";


const Wrapper = styled.nav`
  margin: 0;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        font-size: 24px;
      }
      a {
        filter: drop-shadow(4px 4px 8px #000000a0);
        text-decoration: none;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 900px) {
    ul {
      width: 100%;
      background-color: #364153a4;
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      flex-direction: column;
      position: ${(props) => (props.isOpen ? "absolute" : "static")};
      left: ${(props) => (props.isOpen ? "50%" : "auto")};
      transform: ${(props) => (props.isOpen ? "translateX(-50%)" : "none")};
      z-index: 10;
      gap: 1rem;
      padding: 1rem 0px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    li {
      margin-top: 12px;
    }
  }

  @media (max-width: 500px) {
    li {
      margin-top: 0px;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 900px) {
    display: block;
    font-size: 4rem;
    color: #ededed;
    background-color: transparent;
    border: none;
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
  :hover {
    background-color: #8a8fa344;
    border-radius: 6px;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </HamburgerButton>
      <ul>
        <li>
          <NavLink to={"/"} onClick={() => handleNavigation("/")}>
            <Button1 style={{ textTransform: "uppercase", width: 190 }}>
            <GiMexico />
              new adventures
            </Button1>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} onClick={() => handleNavigation("/")}>
            <Button2 style={{ width: 130, textTransform: "uppercase" }}>
              <RiLogoutCircleLine />
              Logout
            </Button2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} onClick={() => handleNavigation("/")}>
            <Button2 style={{ width: 191, textTransform: "uppercase" }}>
            <TbBrowserCheck /> My trips
            </Button2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} onClick={() => handleNavigation("/")}>
            <Button3 style={{ width: 129, textTransform: "uppercase" }}>
              {" "}
              Profile
              <FaHouseUser />

            </Button3>
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;
