import React, { FC } from "react";
import styled from "styled-components";
import { HeaderTrasition } from "../HeaderTrasition";

const StyledHeader = styled.div`
  background-color: white;
  padding: 2.5rem 0;
  position: relative;
  display: flex;
  margin-top: 5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderTrasition />
    </StyledHeader>
  );
};
