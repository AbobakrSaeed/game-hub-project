import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./appComponents/navBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="coral">
            aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="dodgerblue">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
