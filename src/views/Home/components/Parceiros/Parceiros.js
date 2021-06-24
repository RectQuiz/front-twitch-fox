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

function Parceiros({channels}) {

    const [ parceiros, setParceiros ] = useState([1,2,3]);
    return (
        channels && channels.length > 0 &&
        (
            <Container>
                <Content>
                    <TitleParceiros>
                        lives parceiras
                    </TitleParceiros>
                    <DescParceiros>
                        Farme pipocas em todas as lives!
                    </DescParceiros>
                    <ContainerLogoParceiros>
                        {channels.map(parceiro=>{
                            return (
                                <>
                                    <ContainerLogoParceiro href={parceiro.linkTwitch?parceiro.linkTwitch:"#"} target="_blank" key={parceiro}>
                                        <ContentLogoParceiro>
                                            <LogoParceiro
                                                src={parceiro.id_person.picture?parceiro.id_person.picture:"https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"}
                                            />
                                        </ContentLogoParceiro>
                                        <NameParceiro>
                                        {parceiro.id_person.nickname}
                                        </NameParceiro>
                                    </ContainerLogoParceiro>
                                </>
                            )
                        })}
                    </ContainerLogoParceiros>
                </Content>
            </Container>
        )
    )
}

export default Parceiros;