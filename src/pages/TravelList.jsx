import React, { useEffect, useState } from "react";
import { travelsData } from "../services/fakeApi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Text,
  Heading,
  Stack,
  Image,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { Button1 } from "../components/Buttons";

const TravelList = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    setTravels(travelsData);
  }, []);

  return (
    <CardsContainer
    >
      {travels.map((travel) => (
        <Card key={travel.id} maxW="md">
          <CardBody>
            <Image src={travel.imageUrl} alt={travel.name} borderRadius="lg" />
            <Stack mt="6" spacing="4">
              <Text>
                {travel.state} - {travel.mainEvent}
              </Text>
              <Heading size="lg">{travel.name}</Heading>
              <Text>{travel.about}</Text>
              <Popular rating={travel.rating} />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button1>
                Buy now
              </Button1>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </CardsContainer>
  );
};

const Popular = ({ rating }) => {
  const stars = [];

  // Agregar un icono de estrella por cada unidad en el rating
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon key={i} as={StarIcon} color="yellow.600" w={5} h={5} />);
  }

  return <StyledPopular>{stars}</StyledPopular>;
};

const StyledPopular = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;


const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export default TravelList;
