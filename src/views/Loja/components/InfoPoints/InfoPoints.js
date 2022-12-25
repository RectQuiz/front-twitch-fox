import React from "react";
import {
  Container,
  Content,
  ContentInfoPoints,
  PointsLabel,
  PointsValue,
} from "./styles";
import ScaleLoader from "react-spinners/ScaleLoader";

import { GiPopcorn } from "react-icons/gi";

export default function InfoPoints({ points, loading }) {
  return (
    <Container>
      <Content>
        <ContentInfoPoints>
          <PointsLabel>Seus Pontos:</PointsLabel>
          <PointsValue>
            {!loading ? (
              <>
                {points} <GiPopcorn />
              </>
            ) : (
              <ScaleLoader
                // css={override}
                color="#DC143C"
                height={20}
                width={3}
                margin={2}
                loading={true}
              />
            )}
          </PointsValue>
        </ContentInfoPoints>
      </Content>
    </Container>
  );
}
