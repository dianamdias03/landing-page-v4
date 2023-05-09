import React from "react";
import styled from "styled-components";

export default function ProjectBox({ icon, title, text, action}) {
  return (
    <Wrapper>
      <Box>
        <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
          <img className="radius8" src={icon} alt="project" style={{height: '60px', width: '60px'}}></img>
        </ImgBtn>
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font16">{text}</p>
      </Box>
    </Wrapper>
  );
}

const Box = styled.div`
  width: 90%;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: white;
  height: 400px;
  border-radius: 50px;
  box-shadow: 6px 7px 20px -7px rgba(148,133,148,1);
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    margin: 20px 0;
    max-height: 309px;
    max-width: 376px;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;