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

function ListItens({niveis,deletarNivel}) {

  return (
      <Container>
          <Content>
            <ContainerList>
                <HeaderList>
                    <TitleList>
                        Níveis cadastrados
                    </TitleList>
                </HeaderList>
                <ContentList>
                    {
                        niveis != null?
                        (
                            niveis.map(nivel=>{
                                return(
                                    <ContainerItem key={nivel._id}>
                                        <ContentItem>
                                            <TitleItem>
                                                {`${nivel.name} - ${nivel.number}`}
                                            </TitleItem>
                                            <ContentActionItem>
                                                <DeleteItem onClick={()=>deletarNivel(nivel._id)}>
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