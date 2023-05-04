import React from "react";
import styled from "styled-components";

export default function Maps() {
  return (
    <Wrapper id="maps">
      <Frame 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10344.838579903246!2d-46.65591624472126!3d-23.552177388496133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583653f4bba1%3A0x78d26862ec38e56c!2sCl%C3%ADnica%20Psicol%C3%B3gica%20%22Alvino%20Augusto%20de%20S%C3%A1%22%20-%20Universidade%20Presbiteriana%20Mackenzie!5e0!3m2!1spt-BR!2sbr!4v1683237873882!5m2!1spt-BR!2sbr" 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      ></Frame>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const Frame = styled.iframe`
  width: 100%;
  height: 350px;
  border: 0;
`;





