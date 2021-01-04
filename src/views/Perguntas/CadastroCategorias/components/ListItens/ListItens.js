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

function ListItens({categorias,deletarCategoria}) {

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
                        categorias != null?
                        (
                            categorias.map(categoria=>{
                                return(
                                    <ContainerItem key={categoria._id}>
                                        <ContentItem>
                                            <TitleItem>
                                                {`${categoria.name}`}
                                            </TitleItem>
                                            <ContentActionItem>
                                                <DeleteItem onClick={()=>deletarCategoria(categoria._id)}>
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