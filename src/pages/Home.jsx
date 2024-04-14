import styled from "@emotion/styled";
import fondo from "../assets/magictown.jpg";
import { useState } from "react";
import TravelList from "./TravelList";

const Fondo = styled.div`
  background-image: url(${fondo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 7rem;
  gap: 5rem;

  h2 {
    font-weight: 500;
    color: #ffff;
    font-size: 78px;
    text-transform: capitalize;
    margin: 0;
  }
`;

const FormContainer = styled.form`
  width: 28rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 2px;
  gap: 1em;
  margin: 2em;
  padding: 30px;
  color: #484848;

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 37.5px;
  }

  p {
    font-size: 35px;
    font-weight: 600;
  }

  div {
    display: flex;
  }

  label {
    margin-top: 1px;
    font-size: 18px;
    font-weight: 700;
  }

  input {
    flex: 3;
    padding: 0.5em;
    border: 1px solid #000000;
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  .dates {
    display: flex;
    flex-direction: row;
    gap: 9em;
  }

  input[type="date"] {
    color: #484848;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  button {
    cursor: pointer;
    align-self: flex-end;
    color: white;
    background-color: #ff5a5f;
    border: none;
    height: 48px;
    width: 146px;
    padding: 0.5em 1em;
    border-radius: 4px;

    &:hover {
      border: 2px solid #ff5a5f;
      color: #ff5a5f;
      background-color: white;
    }

    &:active {
      border: 1px solid black;
      color: white;
      background-color: #ff5a5f;
    }
  }
`;

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [developers, setDevelopers] = useState("");

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleArrivalChange = (e) => {
    setArrival(e.target.value);
  };

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDevelopersChange = (e) => {
    setDevelopers(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Fondo>
        <FormContainer onSubmit={handleSearch}>
          <h1>Book unique accommodations to code as never before</h1>
          <label htmlFor="searchTerm">WHERE</label>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Everywhere"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <div className="dates">
            <label htmlFor="arrival">ARRIVAL</label>
            <label htmlFor="departure">DEPARTURE</label>
          </div>
          <div>
            <input
              type="date"
              name="arrival"
              id="arrival"
              value={arrival}
              onChange={handleArrivalChange}
            />
            <input
              type="date"
              name="departure"
              id="departure"
              value={departure}
              onChange={handleDepartureChange}
            />
          </div>
          <label htmlFor="developers">DEVELOPERS</label>
          <input
            type="number"
            name="developers"
            id="developers"
            placeholder="1"
            value={developers}
            onChange={handleDevelopersChange}
          />
          <button type="submit">Search</button>
        </FormContainer>

      </Fondo>
      <TravelsHome>
        <Title>
          <Green>recommended</Green> experience <Red>for you</Red>
        </Title>
        <TravelList />
      </TravelsHome>
    </>
  );
}

export default HomePage;

const Title = styled.p`
  font-weight: 700;
  font-size: 38px;
  text-transform: uppercase;
`;

const TravelsHome = styled.section`
  display: flex;
  padding: 5rem;
  flex-direction: column;
  gap: 1rem;
`;

const Green = styled.span`
  color: #006847;
`;
const Red = styled.span`
  color: #ce1126;
`;
