import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import about from "../../assets/img/about1.jpg";
import decor from "../../assets/img/decor.png";

export default function AboutMe() {
  return (
    <Wrapper id="AboutMe">
      <div className="lightPinkBg2">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img src={about} alt="add" />  
                </ImgWrapper>
                </AddLeftInner>
            </AddLeft>
            <AddRight className="textCenter">
                <h4 className="font15 semiBold">Psicóloga Clínica</h4>
                <h2 className="font40 extraBold">Mariana Lima</h2>
                <ImgWrapper className="flexCenter">
                  <img src={decor} alt="add" style={{maxWidth: "300px"}}/>  
                </ImgWrapper>
                <HeaderP className="font18">
                    Eu sou a Mariana Lima, psicóloga clínica com experiência em ajudar pessoas a superar dificuldades emocionais e comportamentais. Acredito que cada pessoa é única e, por isso, ofereço um atendimento personalizado e adaptado às necessidades individuais de cada cliente.
                    Atuo com diversas questões, como ansiedade, depressão, fobias, traumas, problemas de relacionamento, dentre outros. Utilizo uma abordagem integrativa, que combina técnicas de diferentes abordagens psicológicas para oferecer um tratamento eficaz e satisfatório aos meus clientes.
                    Se você busca ajuda para lidar com questões emocionais e comportamentais, conte comigo para ajudá-lo(a) a encontrar novos caminhos e recursos para viver uma vida mais plena e satisfatória. Entre em contato para agendar uma consulta e iniciar sua jornada rumo ao bem-estar emocional e psicológico.
                </HeaderP>
                <ButtonsRow className="flexCenter" style={{ margin: "10px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Entre em Contato" action={() => alert("clicked")} />
                  </div>
                </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 90px 0 30px 0;
  }
`;
const ButtonsRow = styled.div`
  
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
  padding: 50px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    max-width: 100%;
  }
`;

