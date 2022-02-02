import axios from "axios";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const StyledForm = styled.form`
  margin-top: 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledTable = styled.table`
  filter: drop-shadow(0px 0px 2px grey);
  border: solid;
  background-color: white;
  border-width: 1px;
  border-color: white;
  border-radius: 1%;
  width: 20rem;
  height: 11rem;
`;
const StyledInput = styled.input`
  width 10rem;
  left: 50%;
  border: 1px solid #ccc;
  margin-left: auto;

  &:focus {
    outline: none !important;
    border: 1px solid #009de0;
  }

`;

const StyledButton = styled(animated.button)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Dongle";
  font-size: 20px;
  color: white;
  text-align: center;
  background-color: #009de0;
  border-radius: 50%;
  border: none;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  filter: drop-shadow(0 0 1px gray);
  &:hover {
    background-color: #0284c5;
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 16px;
  font-family: "Dongle", sans-serif;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
  align-items: baseline;
`;

export const CalculatorForm: FC = () => {
  const today = new Date();

  /* jn = JSON representation */
  const [jn, setJn] = useState({
    cart_value: "",
    delivery_distance: "",
    number_of_items: "",
    time: today.toISOString(),
  });

  const [state, toggle] = useState(true);
  console.log(state);
  const pop = useSpring({
    scale: state ? 0.9 : 1.2,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setJn({
      ...jn,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //e.preventDefault(); We want to rerander

    await axios
      .put("/calcs/1/", jn)
      .then((res) => {
        console.log(res, "hello");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTable>
          <StyledField>
            <StyledLabel>Cart value (¢)</StyledLabel>

            <StyledInput
              type="float"
              value={jn.cart_value}
              onChange={handleChange}
              name="cart_value"
            />
          </StyledField>
          <StyledField>
            <StyledLabel>Delivery Distance (m)</StyledLabel>
            <StyledInput
              value={jn.delivery_distance}
              onChange={handleChange}
              name="delivery_distance"
            />
          </StyledField>
          <StyledField>
            <StyledLabel>Amount of items</StyledLabel>
            <StyledInput
              value={jn.number_of_items}
              onChange={handleChange}
              name="number_of_items"
            />
          </StyledField>
          <StyledField>
            <StyledLabel>Time</StyledLabel>
            <StyledInput
              type="datetime-local"
              value={jn.time}
              onChange={handleChange}
              name="time"
            />
          </StyledField>
        </StyledTable>
        <StyledButton
          type="submit"
          onMouseDown={() => toggle(!state)}
          onMouseUp={() => toggle(!state)}
          style={pop}
        >
          Calculate
        </StyledButton>
      </StyledForm>
    </>
  );
};
