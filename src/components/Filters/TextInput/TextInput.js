import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 50px;
  height: 25px;
  width: 45%;
  margin-top: 2%;
`;
function TextInput(props) {
  return (
    <>
      <Input
        type="text"
        value={props.value}
        onChange={(e) => {
          props.handleChange(e.currentTarget.value);
        }}
      ></Input>
    </>
  );
}
function areEqual(prevProps, nextProps) {
  return prevProps.value === nextProps.value;
}

export default React.memo(TextInput, areEqual);
