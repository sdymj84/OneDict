import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <Container>
      <InputField />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const InputField = styled.TextInput`
  background: #ffffff;
  border: 2px solid #f2994a;
  border-radius: 5px;
  width: 90%;
  height: 60px;
  padding: 0 15px;
`;

export default Input;
