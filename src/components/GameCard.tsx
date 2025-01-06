import { Game } from "@/Hooks/useGame";
import { Card, Image, CardBody, Heading,} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={10} boxShadow="md" color="white" overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcons platforms={game.parent_platforms.map(b=>b.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
