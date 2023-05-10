import React from "react";
import styled from "styled-components";

export default function ProjectBox({ icon, title, text, action}) {
  return (
    <Wrapper>
      <div className="boxExpertise">
        <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
          <img className="radius8" src={icon} alt="project" style={{height: '80px', width: '80px', backgroundColor: "#cc9da0", padding: '10px', borderRadius: '50px', position: 'relative', margin: 0, marginTop: '-80px'}}></img>
        </ImgBtn>
        <h3 className="font20 extraBold" style={{padding: '30px 0'}}>{title}</h3>
        <p className="font16">{text}</p>
      </div>
    </Wrapper>
  );
}

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