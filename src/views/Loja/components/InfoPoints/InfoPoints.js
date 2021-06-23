import React from 'react';
import {
    Container,
    Content,
    ContentInfoPoints,
    PointsLabel,
    PointsValue
  } from './styles';
import ScaleLoader from "react-spinners/ScaleLoader";

import { GiPopcorn } from 'react-icons/gi';

export default function InfoPoints({
    user,
    loading
}){
    return (
                    <Container>
                        <Content>
                            {
                                user?
                                (
                                <>
                                    {
                                        user.type_account != 'secondary'&&
                                        (
                                            <ContentInfoPoints>
                                                <PointsLabel>
                                                    Seus Pontos: 
                                                </PointsLabel>
                                                <PointsValue>
                                                    {
                                                        !loading?
                                                        (
                                                        <>
                                                            {user.points} <GiPopcorn/>
                                                        </>
                                                        ):
                                                        (
                                                        <ScaleLoader
                                                            // css={override}
                                                            color="#DC143C"
                                                            height={20}
                                                            width={3}
                                                            margin={2}
                                                            loading={true}
                                                        />
                                                        )
                                                    }
                                                </PointsValue>
                                            </ContentInfoPoints>
                                        )
                                    }
                                </>
                                ):
                                (null)
                            }
                        </Content>
                    </Container>
    )
}