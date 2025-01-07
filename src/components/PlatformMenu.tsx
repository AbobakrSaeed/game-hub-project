import { Platform } from "@/Hooks/useGame";
import usePlatform from "@/Hooks/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface props {
  selectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}
const PlatformMenu = ({ selectPlatform, selectedPlatform }: props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => selectPlatform(platform)} key={platform.id}>
            {platform.name}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
