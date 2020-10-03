import styled from "styled-components";

export const SearchStyles = styled.div`
  border: 1px solid #FF9893;
  border-radius: 5px;
  padding: 10px 7px;
  & .searchicon-container,
  .dropdownicon-container {
    flex-basis: 10%;
  }
  input {
    flex-basis: 60%;
    padding: 0 15px;
  }
`;
