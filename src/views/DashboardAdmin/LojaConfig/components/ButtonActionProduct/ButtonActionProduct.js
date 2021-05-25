import React from 'react';

import {
    Container,
    ContentButton,
    TextButton
} from './styles';

function ButtonActionProduct({
    iconButton,
    textButton,
    onClick,
    color1,
    color2
}) {
  return (
      <Container>
          <ContentButton color1={color1} color2={color2} onClick={onClick}>
            {iconButton}
            <TextButton>
                {textButton}
            </TextButton>
          </ContentButton>
      </Container>
  );
}

export default ButtonActionProduct;