import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h2" size="xl" fontWeight="bold" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
