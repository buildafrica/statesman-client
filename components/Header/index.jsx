import react from "react";
import { HeaderStyles } from "./styles";
import { Flex, Grid } from "../Box/styles";
import Searchbar from "../Searchbar";
import { Bold } from "../FontSize/styles";

const Search = () => {
  return (
    <HeaderStyles>
      <Flex
        justifyContent="flex-start"
        flexWrap="nowrap"
        className="header-wrap"
        width="88%"
      >
        <Bold color="#EC2C22" bold className="header-logo">
          LOGO
        </Bold>

        <Searchbar className="searchbar-container" />

        <div className="header-links-container">
          <Grid className="header-menu" gap="3px">
            <div></div>
            <div></div>
            <div></div>
          </Grid>
          <ul className="header-links">
            <li>HOME</li>
            <li>MORE</li>
            <li>DESIGN</li>
            <li>FOLLOW</li>
          </ul>
        </div>
      </Flex>
    </HeaderStyles>
  );
  ``;
};

export default Search;
