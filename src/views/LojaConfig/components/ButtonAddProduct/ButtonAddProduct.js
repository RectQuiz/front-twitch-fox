import React from 'react';

import {
    Container,
    ContentButton,
    TextButton
} from './styles';

function ButtonAddProduct({
    iconButton,
    textButton,
    flex
}) {
  return (
      <Container flex={flex}>
          <ContentButton>
            {iconButton}
            <TextButton>
                {textButton}
            </TextButton>
          </ContentButton>
      </Container>
  );
}

export default ButtonAddProduct;