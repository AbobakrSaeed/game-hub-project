import useGenres, { Genre } from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: props) => {
  const { data, error, loading } = useGenres();
  return (
    <List>
      {error && <p>{error}</p>}
      {loading &&
        Array.from({ length: 15 }).map((_, i) => <GenreListSkeleton key={i} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
