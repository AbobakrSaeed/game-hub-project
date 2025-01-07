import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        {/* Skeleton for the image */}
        <Skeleton boxSize="32px" borderRadius={8} />
        {/* Skeleton for the text */}
        <SkeletonText noOfLines={1} width="100px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
