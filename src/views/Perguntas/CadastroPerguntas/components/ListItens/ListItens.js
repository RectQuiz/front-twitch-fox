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

    ContainerAlternativas,
    TituloAlternativas,
    ContentAlternativas,
    TextAlternativa
} from './styles';

function ListItens({perguntas,deletarPergunta,ChangeStatusPergunta,quant_perguntas}) {

console.log('perguntas: ',perguntas);

  return (
      <Container>
          <Content>
            <ContainerList>
                <HeaderList>
                    <TitleList>
                        Perguntas cadastradas
                    </TitleList>
                    <TitleList>
                        {`NIVEL 1 = ${quant_perguntas.quant_perguntas_1}`}<br/>
                        {`NIVEL 2 = ${quant_perguntas.quant_perguntas_2}`}<br/>
                        {`NIVEL 3 = ${quant_perguntas.quant_perguntas_3}`}<br/>
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
                                                {`${pergunta.titulo} - ${pergunta.nivel?pergunta.nivel.name:'Nivel não informado'} - ${pergunta.categoria?pergunta.categoria.name:'Nivel não informado'}`}
                                            </TitleItem>
                                            <ContentActionItem>
                                                <DeleteItem color={'#DC143C'} onClick={()=>deletarPergunta(pergunta._id)}>
                                                    Deletar
                                                </DeleteItem>
                                                <DeleteItem color2={'#000'} color={'#DDE117'} onClick={()=>ChangeStatusPergunta(pergunta)}>
                                                    Mudar status
                                                </DeleteItem>
                                            </ContentActionItem>
                                        </ContentItem>
                                        <ContainerAlternativas>
                                            <TituloAlternativas>
                                                ALTERNATIVAS:
                                            </TituloAlternativas>
                                            {
                                                pergunta.alternativas.map((alternativa,index)=>{
                                                   return(
                                                    <ContentAlternativas certa={alternativa.number == pergunta.resposta}>
                                                        <TextAlternativa>
                                                            {index == 0?'A ) ':index == 1?'B ) ':index == 2?'C ) ':index == 3?'D ) ':''}
                                                            {alternativa.name}
                                                        </TextAlternativa>
                                                    </ContentAlternativas>
                                                   )
                                                })
                                            }
                                        </ContainerAlternativas>
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