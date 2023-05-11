import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import about from "../../assets/img/about1.jpg";
import decor from "../../assets/img/decor.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightPinkBg2">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <hr class="solid" width="15%" size="3" color="#945f62"  align="left"/>
                <h2 className="font40 extraBold">Entre em Contato</h2>
                <HeaderP className="font16">
                Venha conhecer o meu espaço, sou psicóloga desde 2018, sou extremamente motivada em ajudar as pessoas a lidarem de uma forma melhor com os seus sentimentos e pensamentos. Convido você a embarcar no caminho mais frutífero que você poderia trilhar – esse processo chamado de Psicoterapia. Será um prazer ajudar você neste caminho! Vamos juntos?
                </HeaderP>
                <HeaderP className="font16">
                Telefone: (00) 00000-0000
                </HeaderP>
                <HeaderP className="font16">
                Endereço: Av. A-000, Nª 000, terceiro andar, sala 401 – Endereço completo – SP, 00000-000
                </HeaderP>
                <ButtonsRow className="flexCenter" style={{ margin: "10px 0", paddingTop:'30px' }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Entre em Contato" action={() => alert("clicked")} />
                  </div>
                </ButtonsRow>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <Frame 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10344.838579903246!2d-46.65591624472126!3d-23.552177388496133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583653f4bba1%3A0x78d26862ec38e56c!2sCl%C3%ADnica%20Psicol%C3%B3gica%20%22Alvino%20Augusto%20de%20S%C3%A1%22%20-%20Universidade%20Presbiteriana%20Mackenzie!5e0!3m2!1spt-BR!2sbr!4v1683237873882!5m2!1spt-BR!2sbr" 
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              ></Frame>
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
const Frame = styled.iframe`
  width: 100%;
  height: 300px;
  border: 0;
  position:relative;
  top:-80px;
  verticalAlign: "top"
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
  padding: 15px 40px 15px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    max-width: 100%;
    padding: 15px 0 0 0;
  }
`;

