import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="3">
      <Image src={logo} boxSize="20" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
