import useGames from "@/Hooks/useGame";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((games) => <li key={games.id}>{games.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
