import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface props {
  onSearch: (query: string) => void;
}
const NavBar = ({onSearch}:props) => {
  return (
    <HStack padding="3">
      <Image src={logo} boxSize="20" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
