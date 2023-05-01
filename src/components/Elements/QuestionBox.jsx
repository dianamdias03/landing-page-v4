import React from "react";
import styled from "styled-components";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QuestionBox({id, question, answer, open, setOpen}) {
  return (
    <TableBox 
      onClick={() => {
        setOpen(open.includes(id) ? open => open.filter(item => item != id) : open => [...open, id])
      }}
    >
      <NavInner className="container flexSpaceCenter">
        <h1 className="font20 extraBold">
          {question}
        </h1>
        <ExpandMoreIcon className="font20"/>
      </NavInner>
      <Collapsible open={open.includes(id)}>
        <CollapsibleBody className="font16">
          {answer.split(/\r?\n/).map((item) => {
            return(
              <p className="container">
                {item}
              </p>);
          })}
        </CollapsibleBody>
      </Collapsible>
    </TableBox>
  );
}

const CollapsibleBody = styled.div`
  padding: 10px 10px 10px;
  background-color: #FEFFF23A;
  border-radius: 0px 0px 10px 10px;
  color: black;
`;

const TableBox = styled.div`
  margin: 20px 0 20px;
  color:white;
  text-align: justify;
  width: 100%;
  background-color: #FEFFF23A ;
  border-radius: 10px 10px 10px 10px;
  
`;

const NavInner = styled.div`
  padding: 10px 20px 10px;
  position: relative;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  background-color: #66839C;
  :hover {
    background-color: #475B6D;
  }
`

