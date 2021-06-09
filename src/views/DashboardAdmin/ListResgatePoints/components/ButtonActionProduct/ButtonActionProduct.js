import React from 'react';
import colors from '../../../../../styles/colors';
import ScaleLoader from "react-spinners/ScaleLoader";

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
    color2,
    loading
}) {
  return (
      <Container>
          <ContentButton color1={color1} color2={color2} onClick={onClick}>
            {iconButton}
            <TextButton>
                {textButton}
            </TextButton>
            {
                loading&&
                (
                    <ScaleLoader
                        // css={override}
                        color={colors.primary_dashboard}
                        height={20}
                        width={7}
                        margin={7}
                        loading={true}
                    />
                )
            }
          </ContentButton>
      </Container>
  );
}

export default ButtonActionProduct;