import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface props {
  rating: number;
}
const Emoji = ({ rating }: props) => {
  const emogiMap: { [key: number]: ImageProps } = {
    //[key: number]: 'index signature' means the object can have any number of keys of type number
    // properties for Image
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emogiMap[rating]} />;
};

export default Emoji;
