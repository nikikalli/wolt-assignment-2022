import React, { FC } from "react";
import { CalculationResults } from "./Components/CalculationResults";
import { CalculatorForm } from "./Components/CalculatorForm";
import { Header } from "./Components/Header";
import styled from "styled-components";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: FC = () => {
  return (
    <StyledMainPage>
      <Header />
      <CalculatorForm />
      <CalculationResults />
    </StyledMainPage>
  );
};
export default App;
