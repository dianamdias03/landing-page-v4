import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import Anxiety from "../../assets/img/anxiety.png";
import Burnout from "../../assets/img/burnout.png";
import Fear from "../../assets/img/fear.png";
import Stress from "../../assets/img/stress.png";
import Insecurity from "../../assets/img/insecurity.png";
import Shyness from "../../assets/img/shyness.png";
import decor from "../../assets/img/decor.png";

export default function Expertise() {

  const expertises = [
    {
      "title": "Ansiedade",
      "description": "A ansiedade é uma resposta natural do organismo a situações de estresse, perigo ou incerteza, que pode ser percebida como sensações de preocupação, medo, nervosismo, tensão, entre outras. No entanto, quando essa resposta se torna excessiva e frequente, interferindo na qualidade de vida e nas atividades diárias, pode ser considerada um transtorno de ansiedade.",
      "icon": Anxiety
    },
    {
      "title": "Burnout",
      "description": "O burnout é um problema comum em muitas pessoas, especialmente em profissionais que trabalham em áreas com alto nível de estresse, como médicos, enfermeiros, professores, advogados, entre outros. É caracterizado por sentimentos de exaustão emocional, despersonalização e diminuição da realização pessoal.",
      "icon": Burnout
    },
    {
      "title": "Estresse",
      "description": "O estresse é uma resposta natural do corpo a situações desafiadoras ou ameaçadoras e pode ser desencadeado por diversos fatores. Em curto prazo, ele pode até ser benéfico para a motivação e desempenho. No entanto, quando é crônico ou excessivo, pode ser prejudicial para a saúde física e mental.",
      "icon": Stress
    },
    {
      "title": "Medo",
      "description": "O medo é uma emoção natural e necessária para a sobrevivência, pois nos ajuda a identificar perigos e a tomar medidas para nos proteger. No entanto, quando o medo se torna excessivo e interfere na vida diária, pode se tornar um problema de saúde mental.",
      "icon": Fear
    },
    {
      "title": "Insegurança",
      "description": "A insegurança é um sentimento comum que pode afetar a autoestima e a confiança de uma pessoa. Ela pode ser desencadeada por diversos fatores, como a falta de autoconhecimento, experiências traumáticas ou negativas, críticas de outras pessoas, entre outros.",
      "icon": Insecurity
    },
    {
      "title": "Timidez",
      "description": "A timidez é um sentimento de inibição ou desconforto em situações sociais ou em interações com outras pessoas. É uma característica comum em muitas pessoas, mas pode se tornar um problema quando interfere na vida diária e nas relações interpessoais.",
      "icon": Shyness
    }
  ]

  return (
    <Wrapper id="expertise">
      <div className="lightPinkBg2" style={{ padding: "0 0 100px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 textCenter">Áreas de Atuação</h1>
            <h2 className="font13 textCenter">Tratamentos e demandas mais frequentes que atendo atualmente</h2>
          </HeaderInfo>
          <div className="row textCenter">
            {expertises.map((item) => {
              console.log(item)
              return (
                <div key={item.title} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                    icon={item.icon}
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
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 20px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
