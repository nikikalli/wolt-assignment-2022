import React, { useState } from "react";
import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";

const StyledH1 = styled(animated.h1)`
  font-family: "Dancing Script";
`;

export const HeaderTrasition = () => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 1000,
    config: config.molasses,
    duration: 400000,
    onRest: () => set(!toggle),
  });

  return transitions(({ opacity }, item) =>
    item ? (
      <StyledH1
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        Wölt
      </StyledH1>
    ) : (
      <StyledH1
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        Delivery Fee Calculator
      </StyledH1>
    )
  );
};
