import react from "react";
import { SearchStyles } from "./styles";
import { SearchIcon, DropdownIcon } from "../../assets/svg";
import { FlexibleDiv } from "../Box/styles";

const Search = () => {
  return (
    <SearchStyles>
      <FlexibleDiv justifyContent="space-between" flexWrap='nowrap'>
        <div className="searchicon-container">
          <SearchIcon
            className="searchIcon"
            color="#000"
            height="20px"
            width="20px"
          />
        </div>
        <input type="text" />
        <div className="dropdownicon-container">
          <DropdownIcon
            className="dropDownIcon"
            color="red"
            height="20px"
            width="20px"
          />
        </div>
      </FlexibleDiv>
    </SearchStyles>
  );
  ``;
};

export default Search;
