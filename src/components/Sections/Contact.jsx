import React from "react";
import styled from "styled-components";
// Components
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FullButton from "../Buttons/FullButton";

export default function Contact() {
  return (
    <Wrapper id="contact" className="contactBg">
      <div>
        <div className="container">
          <TablesWrapper className="flexCenter">
            <TableBox>
              <WrapperBox className="whiteBg radius8 shadow">
                <div className="flexCenter">
                  <p className="font25 extraBold">{"Entre em Contato"}</p>
                </div>
                <div style={{ margin: "30px 0", textAlign: "center"}} className="flexCenter">
                  <p className="font16">{"Atendimento para adolescentes e adultos"}</p>
                </div>
                <div>
                  <div className="flexCenter" style={{ margin: "15px 0" }}>
                    <h4 className="font30 extraBold">
                      <a href="https://web.whatsapp.com/send/?phone=555548992112596&text=Ol%C3%A1%2C+vim+pelo+site%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+consulta.&type=phone_number&app_absent=0" target="_blank"><WhatsAppIcon fontSize="large" style={{padding: "0px 10px", verticalAlign: 'top', color: 'green'}}/>{"(48) 95741-4652"}</a>
                    </h4>
                  </div>
                </div>
                <div style={{ margin: "30px 0" }} className="flexCenter">
                  <p className="font16"><MailOutlineIcon fontSize="small" style={{padding: "0px 10px", verticalAlign: 'top'}}/>{"email@gmail.com"}</p>
                </div>
                <div style={{ margin: "30px 0", textAlign: "center"}} className="flexCenter">
                  <p className="font14"><PlaceIcon fontSize="small" style={{padding: "0px 10px", verticalAlign: 'top'}}/>{"Rua Ana Pereira de Melo nº 000- Sala 000/ 10 andar . CEP 00000-000- São Paulo/SP"}</p>
                </div>
              </WrapperBox>
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
      <div className="flexCenter whiteColor" style={{ margin: "30px 0"}}>
        <InstagramIcon fontSize="large" style={{padding: "0px 10px"}}/><p className="font20 extraBold"><a className="whiteColor" href="https://www.instagram.com/" target="_blank">{"@annaribeiro.psi"}</a></p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 120px;
  @media (max-width: 860px) {
    padding: 100px 0px;
  }
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 40%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;

const WrapperBox = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
`;





