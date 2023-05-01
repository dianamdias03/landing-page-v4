import React from "react";
import styled from "styled-components";
// Components
import 'collapsible-react-component/dist/index.css'
import QuestionBox from "../Elements/QuestionBox";

export default function Questions() {

  const [openQuestions, setOpenQuestions] = React.useState([]);
  const questions = [
    {
      "id": React.useId(),
      "question": "O que é Psicoterapia?",
      "answer": "Psicoterapia é o processo terapêutico realizado pelo psicólogo com o objetivo de promover a saúde mental do paciente. Nesse processo, são utilizadas diversas técnicas e abordagens para ajudar a pessoa a compreender e lidar com seus problemas emocionais, comportamentais e psicológicos. É um espaço seguro e acolhedor para que o paciente possa se expressar livremente, trabalhar suas questões pessoais e encontrar novos caminhos para uma vida mais equilibrada e satisfatória.",
    },
    {
      "id": React.useId(),
      "question": "Como eu sei se devo fazer Terapia?",
      "answer": "A terapia pode servir para diversas funções: se conhecer melhor, cuidar da saúde emocional ou ajudar a lidar com situações de sofrimento emocional. Algumas pessoas também optam por fazer terapia para melhorar o rendimento profissional, reduzir o estresse ou a ansiedade no dia-a-dia. Do ponto de vista clínico, a terapia passa a ser sugerida quando as suas atividades rotineiras estão sendo comprometidas por emoções negativas recorrentes e/ou sintomas físicos começam a aparecer.",
    },
    {
      "id": React.useId(),
      "question": "Posso remarcar as minhas consultas?",
      "answer": "Qualquer consulta poderá ser remarcada através do WhatsApp, desde que a remarcação seja realizada até 24h antes do atual horário da consulta. Você poderá escolher um novo horário de acordo com a agenda disponível.",
    },
    {
      "id": React.useId(),
      "question": "Como funciona o atendimento online de psicologia?",
      "answer":"1. Primeiro contato por e-mail ou WhatsApp. Momento que nos apresentamos;\n2. Escolha do melhor horário para a sessão;\n3. Faça o pagamento da sessão. Combinaremos a melhor forma de pagamento.\n4. No momento da consulta."
    },
    {
      "id": React.useId(),
      "question": "Qual horário de funcionamento?",
      "answer":"Para você encontrar um horário tranquilo para sua terapia, atendo com turnos alternados que vão das 8h00 às 22h00. De segunda a sexta-feira, com uma hora de sessão."
    },
    {
      "id": React.useId(),
      "question": "Como funciona a terapia?",
      "answer":"Cada paciente é único, cada processo também. Em regra geral o processo terapêutico acontece presencialmente, com duração de 50 à 60 minutos, e frequência semanal. Mas estes são acordos que podem ser alterados, de acordo com cada necessidade do paciente.\nAlem do recurso da fala, e das intervenções que faço ao longo da sessão, a terapia também pode contar com escalas ou avaliações psicológicas, isso não é uma regra, cada caso é avaliado, e se for necessário, antes da aplicação é pedido autorização e explicado ao paciente o objetivo do instrumento psicológico."
    }
  ]

  return (
    <>
      <Wrapper id="questions">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Dúvidas Frequentes</h1>
          </HeaderInfo>
          {questions.map((item) => {
            return(
              <QuestionBox 
                key={item.id}
                id={item.id}
                question={item.question} 
                answer={item.answer}
                open={openQuestions}
                setOpen={setOpenQuestions}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;  
`;

const HeaderInfo = styled.div`
  padding: 0 0 20px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;


