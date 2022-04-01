import React from "react";
import styled from "styled-components";

const Select = styled.select`
  border-radius: 50px;
  height: 50%;
`;
function DropDown(props) {
  return (
    <>
      <Select name={props.name} id={props.name} onChange={props.handleChange}>
        {props.options.map((item, id) => {
          return (
            <option value={item.value} id={id}>
              {item.name}
            </option>
          );
        })}
      </Select>
    </>
  );
}
function areEqual(prevProps, nextProps) {
  return prevProps.options === nextProps.options;
}

export default React.memo(DropDown, areEqual);
