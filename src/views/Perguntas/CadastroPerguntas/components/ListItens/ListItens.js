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
    DeleteItem
} from './styles';

function ListItens({perguntas,deletarPergunta}) {

    console.log('perguntas: ',perguntas);

  return (
      <Container>
          <Content>
            <ContainerList>
                <HeaderList>
                    <TitleList>
                        Perguntas cadastradas
                    </TitleList>
                </HeaderList>
                <ContentList>
                    {
                        perguntas != null?
                        (
                            perguntas.map(pergunta=>{
                                return(
                                    <ContainerItem ativa={pergunta.ativa} key={pergunta._id}>
                                        <ContentItem>
                                            <TitleItem>
                                                {`${pergunta.titulo} - ${pergunta.nivel?pergunta.nivel.name:'Nivel não informado'}`}
                                            </TitleItem>
                                            <ContentActionItem>
                                                <DeleteItem onClick={()=>deletarPergunta(pergunta._id)}>
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