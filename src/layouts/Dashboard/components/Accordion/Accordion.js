import React, { useState, useRef } from "react";
import colors from "../../../../styles/colors";
import {
    Container,
    ButtonItem,
    LabelItem,
    ContainerSubItens,
    ContentSubItens,
    IconItem,
    ContentSubItem,
    LabelSubItem,
    ContentItem,
    IconItemMarc
} from './styles';

function Accordion({
    title,
    subitens,
    selectItemMenu,
    item_selected
}) {
  const [setActive, setActiveState] = useState(false);
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState('rotate(-90deg)');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === false ? true : false);
    setHeightState(
      setActive === true ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === true ? 'rotate(-90deg)' : 'rotate(0deg)'
    );
  }
  
  return (
    <Container>
        <ButtonItem active={setActive} onClick={toggleAccordion}>
            <ContentItem>
                <LabelItem>{title}</LabelItem>
                <IconItem style={{transform:setRotate}} className={`${setRotate}`} size={20} color={colors.white} />
            </ContentItem>
        </ButtonItem>

      <ContainerSubItens ref={content} style={{ maxHeight: `${setHeight}`}}>
        <ContentSubItens>
            {
                subitens.map((subitem)=>(
                    <ContentSubItem onClick={()=>selectItemMenu(subitem)}>
                        <IconItemMarc size={15} color={(item_selected && item_selected.index == subitem.index)?colors.primary_geral:colors.primary_dashboard} />
                        <LabelSubItem selected={item_selected && item_selected.index == subitem.index}>
                            {subitem.name}
                        </LabelSubItem>
                    </ContentSubItem>
                ))
            }
        </ContentSubItens>
      </ContainerSubItens>

    </Container>
  );
}

export default Accordion;