import React, { FC } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { useFetchData } from "../../hooks";
import { JsonData } from "../../types/index";

const StyledResults = styled.div`
  margin-top: 1rem;
`;
const StyledNum = styled(animated.text)`
  display: inline-block;
`;

const StyledH1 = styled.h1`
  font-family: "Dongle";
`;

export const CalculationResults: FC = ({ ...restProps }) => {
  const styles = useSpring({
    loop: false,
    to: { opacity: 1, transform: "translateY(0px)" },

    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { duration: 700, tension: 220, fiction: 120 },
  });

  const { data } = useFetchData();
  const some: JsonData = {
    fee: 0,
  };
  const temp = data || some; // In case data is undefined
  console.log(temp);

  return (
    <StyledResults>
      <StyledH1>
        Delivery price:{" "}
        <StyledNum style={styles}> {Number(temp.fee)}€</StyledNum>
      </StyledH1>
    </StyledResults>
  );
};
