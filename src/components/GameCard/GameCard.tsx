import { Game } from "@/Hooks/useGame";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "../Emoji";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card shadow="none">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map((b) => b.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
