import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: props) => {
  const data = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date Added" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
    { value: "-updated", label: "Last Update" },
  ];

  const currentSortOrder = data.find((s) => s.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Sorted by: {currentSortOrder?.label || "Relevance "}
      </MenuButton>
      <MenuList>
        {data.map((sortItem) => (
          <MenuItem
            key={sortItem.value}
            value={sortItem.value}
            onClick={() => onSelectSortOrder(sortItem.value)}
          >
            {sortItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
