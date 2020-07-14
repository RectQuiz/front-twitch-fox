import React,{ useState } from 'react';

import { 
    Container, 
    Content,

    TitleParceiros,
    DescParceiros,
    ContainerLogoParceiros,
    ContentLogoParceiro,
    LogoParceiro,
    NameParceiro,
    ContainerLogoParceiro
 } from './styles';
 import logo from '../../../../assets/images/logo.png';

function Parceiros() {

    const [ parceiros, setParceiros ] = useState([1,2,3]);

    return (
        <Container>
            <Content>
                <TitleParceiros>
                    lives parceiras
                </TitleParceiros>
                <DescParceiros>
                    Farme pipocas em todas as lives!
                </DescParceiros>
                <ContainerLogoParceiros>
                    {parceiros.map(parceiro=>{
                        return (
                            <ContainerLogoParceiro key={parceiro}>
                                <ContentLogoParceiro>
                                    <LogoParceiro
                                        src={logo}
                                    />
                                </ContentLogoParceiro>
                                <NameParceiro>
                                    TeJokerz
                                </NameParceiro>
                            </ContainerLogoParceiro>
                        )
                    })}
                </ContainerLogoParceiros>
            </Content>
        </Container>
    )
}

export default Parceiros;