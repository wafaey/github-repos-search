import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown/DropDown";
import TextInput from "./TextInput/TextInput";
import Data from "../../constants/Filters";
const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-top: 4%;
`;
const SingleFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const Label = styled.label`
  font-size: 200%;
`;

function Filters({
  userName,
  searchText,
  onUserNameChange,
  onSearchChange,
  handleDropdownChange,
}) {
  return (
    <FiltersContainer>
      <SingleFilter>
        <Label>Search by username </Label>
        <TextInput value={userName} handleChange={onUserNameChange}></TextInput>
      </SingleFilter>
      <SingleFilter>
        {" "}
        <Label>Search by repositories </Label>
        <div>
          <TextInput
            value={searchText}
            handleChange={onSearchChange}
          ></TextInput>
          <DropDown
            name={"type"}
            handleChange={handleDropdownChange}
            options={Data.types}
          />
          <DropDown
            name={"sort"}
            handleChange={handleDropdownChange}
            options={Data.orders}
          />
          <DropDown
            name={"language"}
            handleChange={handleDropdownChange}
            options={Data.languages}
          />
        </div>
      </SingleFilter>
    </FiltersContainer>
  );
}
function areEqual(prevProps, nextProps) {
  return (
    prevProps.userName === nextProps.userName &&
    prevProps.searchText === nextProps.searchText
  );
}

export default React.memo(Filters, areEqual);
