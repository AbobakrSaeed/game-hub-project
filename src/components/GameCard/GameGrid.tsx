import useGames from "@/Hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";

interface props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: props) => {
  const { data, error, loading } = useGames(gameQuery);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={5}
      >
        {loading &&
          Array.from({ length: 15 }).map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
