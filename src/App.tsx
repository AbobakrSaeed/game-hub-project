import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GameGrid from "./components/GameCard/GameGrid";
import GenreList from "./components/genres/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./Hooks/useGame";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack paddingLeft={5}>
            <PlatformMenu
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
