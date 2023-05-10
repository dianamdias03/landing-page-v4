import React from "react";
import styled from "styled-components";

export default function ProjectBox({ icon, title, text, action}) {
  return (
    <Wrapper>
      <Box>
        <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
          <img className="radius8" src={icon} alt="project" style={{height: '80px', width: '80px', backgroundColor: "#cc9da0", padding: '10px', borderRadius: '50px', position: 'absolute', margin: 0, marginTop: '-65px', marginLeft: '-35px'}}></img>
        </ImgBtn>
        <h3 className="font20 extraBold" style={{padding: '30px 0'}}>{title}</h3>
        <p className="font16">{text}</p>
      </Box>
    </Wrapper>
  );
}

const Box = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: white;
  height: 350px;
  border-radius: 10px;
  box-shadow: 6px 7px 20px -7px rgba(148,133,148,1);
  position: 'relative'
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
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