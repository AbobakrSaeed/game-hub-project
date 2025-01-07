import { Game } from "@/Hooks/useGame";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card shadow='none'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((b) => b.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
