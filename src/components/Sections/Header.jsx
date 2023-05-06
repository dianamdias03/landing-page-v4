import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div id="home" className="headerBg">
      <div className="">
        <div className="container">
          <Advertising>
            <Title className="extraBold relative textCenter white">Seja bem vindo a sua jornada de autoconhecimento</Title>
            <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-60}>
              <ButtonsRow>
                <FullButton className="font18" title="Fale Comigo" fontSize={"1.125rem"}/>
              </ButtonsRow>
              </Link>
          </Advertising>
        </div>
    </div>
    </div>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;
const Title = styled.h2`
  font-size: 2.8rem;
  color: #fff;
  max-width: 80%;
  @media(max-width:770px) {
    font-size: 1.8rem;
  }
`;
const Advertising = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  margin: 50px 0;
  width: 250px;
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const HeaderP = styled.div`
  max-width: 480px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    max-width: 100%;
  }
`;
