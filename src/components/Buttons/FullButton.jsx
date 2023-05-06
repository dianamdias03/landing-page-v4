import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border, fontSize = "0.875rem" }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
      fontSize={fontSize}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#8a5053" : "#945f62")};
  background-color: ${(props) => (props.border ? "transparent" : "#945f62")};
  width: 100%;
  padding: 15px;
  outline: none;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.border ? "#8a5053" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#8a5053")};
    border: 1px solid #945f62;
    color: ${(props) => (props.border ? "#945f62" : "#fff")};
  }
`;

