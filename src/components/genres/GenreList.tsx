import useGenres from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, loading } = useGenres();
  return (
    <List>
      {error && <p>{error}</p>}
      {loading &&
        Array.from({ length: 15 }).map((_, i) => <GenreListSkeleton key={i} />)}
      {data.map((b) => (
        <ListItem key={b.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(b.image_background)}
            />
            <Text>{b.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
