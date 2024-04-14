import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaMapPin } from "react-icons/fa6";
import styled from "@emotion/styled";

// Define la fake API
export const experiences = [
  {
    id: 1,
    state: "Morelos",
    user: "Ana Soriano",
    mainEvent: "La Mojiganga",
    comment:
      "¡La mojiganga en Morelos fue una experiencia increíble! Nunca antes había experimentado algo tan vibrante y lleno de energía. Desde las coloridas máscaras hasta los bailes folclóricos, cada momento fue una explosión de cultura y diversión. Definitivamente, una experiencia que recomendaría a cualquiera que quiera sumergirse en la rica tradición mexicana. ¡Gracias a la empresa de viajes por hacerlo posible! ",
  },
  {
    id: 2,
    state: "Estado de México",
    user: "Oswaldo Hrnz",
    mainEvent: "Jiquipilco",
    comment:
      "¡La mojiganga en Morelos fue una experiencia increíble! Nunca antes había experimentado algo tan vibrante y lleno de energía. Desde las coloridas máscaras hasta los bailes folclóricos, cada momento fue una explosión de cultura y diversión. Definitivamente, una experiencia que recomendaría a cualquiera que quiera sumergirse en la rica tradición mexicana. ¡Gracias a la empresa de viajes por hacerlo posible!",
  },
  {
    id: 3,
    state: "Chiapas",
    user: "Sam Pérez",
    mainEvent: "Día de muertos",
    comment:
      "¡La experiencia en Ihuatzio con la visita a los panteones durante el Día de Muertos fue verdaderamente conmovedora! Desde la vibrante atmósfera de las calles hasta la belleza de las ofrendas adornadas con flores y velas, cada momento resonaba con la rica tradición y el profundo respeto por los seres queridos fallecidos. Una experiencia cultural única que siempre llevaré en mi corazón. ¡Gracias a la empresa de viajes por hacer posible este viaje inolvidable!",
  },
];

function CardExperiences() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    // Establece los datos de la fake API
    setTravels(experiences);
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {travels.map((travel) => (
        <Card key={travel.id} maxW="md">
          <CardBody>
            <Stack mt="6" spacing="4">
              <Heading size="lg">
                @<Blue>{travel.user}</Blue>{" "}
              </Heading>
              <Ubication>
                <FaMapPin style={{ color: "red" }} /> {travel.state} -{" "}
                {travel.mainEvent}
              </Ubication>
              <Commits>
                <Text>{travel.comment}</Text>
              </Commits>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default CardExperiences;

const Ubication = styled(Text)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Blue = styled.span`
  color: #0277b5;
`;

const Commits = styled.div`
  background-color: #dddddd;
  border-radius: 5px;
  display: flex;
  padding: 12px;
  font-family: "Times New Roman", Times, serif;
`;
