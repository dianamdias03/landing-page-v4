import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";
import Anxiety from "../../assets/img/anxiety.jpg";
import Depression from "../../assets/img/depression.jpg";
import EatingDisorder from "../../assets/img/eating-disorder.jpg";
import EmotionalHealth from "../../assets/img/emotional-health.jpg";
import Relationship from "../../assets/img/relationship.jpg";
import SelfEsteem from "../../assets/img/self-esteem.jpg";

export default function Expertise() {

  const expertises = [
    {
      "title": "Ansiedade",
      "description": "Apesar de ser uma emoção normal, quando excessiva torna-se prejudicial. Normalmente, vem acompanhada de desconforto, seja físico ou não. Portanto, acaba prejudicando a sua vida pessoal e profissional.",
      "img": Anxiety
    },
    {
      "title": "Relacionamentos",
      "description": "Bons relacionamentos são construídos através da comunicação. Caso ela não exista ou contenha ruídos, os laços correm risco de ter prazo de validade.",
      "img": Relationship
    },
    {
      "title": "Saúde emocional",
      "description": "A Psicologia ajuda você a desconstruir percepções, dar adeus aos pensamentos limitantes e a crenças prejudiciais que são alimentadas por nós por anos. Assim, você consegue trilhar um caminho leve e tranquilo.",
      "img": EmotionalHealth
    },
    {
      "title": "Autoestima",
      "description": "Ame-se do jeito que você é! Valorize a sua identidade, confie em si mesmo e reconheça o seu valor.",
      "img": SelfEsteem
    },
    {
      "title": "Transtorno Alimentar",
      "description": "A Psicologia vai te ajudar a entender o que está acontecendo, reconhecer os sinais, principalmente aqueles que antecedem uma crise, bem como para sair dos ciclos que contribuem para o quadro.",
      "img": EatingDisorder
    },
    {
      "title": "Depressão",
      "description": "A terapia é parte fundamental de qualquer tratamento para depressão. Um psicólogo ajuda a identificar as origens do problema, que podem ser surpreendentes até mesmo para o próprio paciente.",
      "img": Depression
    }
  ]

  return (
    <Wrapper id="expertise">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Especialidades</h1>
          </HeaderInfo>
          <div className="row textCenter">
            {expertises.map((item) => {
              return (
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                    img={item.img}
                    title={item.title}
                    text={item.description}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 40px;
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;