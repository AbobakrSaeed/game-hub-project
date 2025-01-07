import { Badge } from "@chakra-ui/react";

interface props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: props) => {
    const color = metacritic >= 85? 'green' : metacritic >= 65? 'yellow' :'red';
  return <Badge fontSize='14px' paddingX={2} borderRadius={4} colorScheme={color}>{metacritic}</Badge>;
};

export default CriticScore;
