import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const data = [
    { id: 0, name: "date" },
    { id: 1, name: "time" },
    { id: 2, name: "latest" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {"Sort"}
      </MenuButton>
      <MenuList>
        {data.map((sort) => (
          <MenuItem key={sort.id} onClick={() => console.log(sort)}>
            {sort.name}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
