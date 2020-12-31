import React from 'react';

import {
    Container,
    Content,
    ContainerList,
    HeaderList,
    TitleList,
    ContentList,

    ContainerItem,
    ContentItem,
    TitleItem,
    ContentActionItem,
    DeleteItem,

    ContentImageInput,
    ImagePremioCad
} from './styles';

function ListItens({premiacoes,deletarPremiacao}) {

    console.log('premiacoes: ',premiacoes);

  return (
      <Container>
          <Content>
            <ContainerList>
                <HeaderList>
                    <TitleList>
                        Prêmios cadastrados
                    </TitleList>
                </HeaderList>
                <ContentList>
                    {
                        premiacoes != null?
                        (
                            premiacoes.map(premiacao=>{
                                return(
                                    <ContainerItem key={premiacao._id}>
                                        <ContentItem>
                                            <ContentImageInput>
                                                <ImagePremioCad src={'http://localhost:3333/'+premiacao.image}/>
                                            </ContentImageInput>
                                            <TitleItem>
                                                {`${premiacao.titulo} - ${premiacao.valor?premiacao.valor+' Pipocas':'Valor não informado'}`}
                                            </TitleItem>
                                            <ContentActionItem>
                                                <DeleteItem onClick={()=>deletarPremiacao(premiacao._id)}>
                                                    Deletar
                                                </DeleteItem>
                                            </ContentActionItem>
                                        </ContentItem>
                                    </ContainerItem>
                                )
                            })
                        ):
                        (
                            <></>
                        )
                    }
                </ContentList>
            </ContainerList>
          </Content>
      </Container>
  );
}

export default ListItens;