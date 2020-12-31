import React, { useState } from 'react';

import {
    Container,
    Content,
    ContainerPremio,
    ContainerArrow,
    ContentIndicePremio,
    LabelIndicePremio,
    ContentImagePremio,
    ImagePremio,
    ContentNomePremio,
    NomePremio,
    ContainerAjudas,
    ContentAjuda,
    ImageAjuda
} from './styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import image_c4 from '../../../../../assets/images/c4.png';
import image_defuse from '../../../../../assets/images/defuse.png';
import Partida from '../../Partida';

function Premiacoes({premiacoes,ajudas,setAjuda,partida}) {
  const [ stateArrow, setStateArrow ] = useState(true);
  const [ styleAjudas, setStyleAjudas ] = useState({});
  const [ styleArrow, setStyleArrow ] = useState({});
  const [ stylePremiosContent, setStylePremiosContent ] = useState({});

  // console.log('premiacoes: ',premiacoes);
  // console.log('partida: ',partida);

  function mudarStatusArraow() {
    setStateArrow(!stateArrow);
    if (stateArrow) {
      setStyleAjudas({
        display:'none'
      });
      setStylePremiosContent({
        width:'auto',
        padding:0
      });
      setStyleArrow({
        transform:'translateX(0)'
      });
    }else{
      setStyleArrow({});
      setStyleAjudas({});
      setStylePremiosContent({});
    }
  }

  function logicaCor2(indice) {
    return (
        partida.quant_acertos+1 == indice?'#0B0530':
        '#fff'
    );
  }

  function logicaCor(indice) {
    return (
      partida.nivel.number >= 2  && indice == 5 && partida.quant_acertos >= 5?
      '	#FF8C00':
      partida.nivel.number >= 3 && indice == 10 && partida.quant_acertos >= 10?
      '	#FF8C00':
      partida.nivel.number >= 4 && indice == 15 && partida.quant_acertos >= 15?
      '	#FF8C00':
      (
        partida.quant_acertos+1 == indice?'#FFD700':
        partida.quant_acertos >= indice?'#2E8B57':'#0B0530'
      )
    );
  }
  

  return (
      <Container>
          <ContainerArrow style={styleArrow}>
            {
              stateArrow?
              (
                <MdChevronRight onClick={mudarStatusArraow} size={40} color={'#fff'}/>
              ):
              (
                <MdChevronLeft onClick={mudarStatusArraow} size={40} color={'#fff'}/>
              )
            }
          </ContainerArrow>
          <Content style={stylePremiosContent}>
            {
              partida &&
              (
                <>
                  <ContainerAjudas style={styleAjudas}>
                    <ContentAjuda status={partida.ajuda_1} onClick={()=>setAjuda(1)}>
                      <ImageAjuda src={image_c4}/>
                    </ContentAjuda>
                    <ContentAjuda status={partida.ajuda_2} onClick={()=>setAjuda(2)}>
                      <ImageAjuda src={image_defuse}/>
                    </ContentAjuda>
                  </ContainerAjudas>
                  {
                    stateArrow && premiacoes != null?
                    (
                      premiacoes.map((premiacao)=>{
                        return(
                          <ContainerPremio cor2={()=>logicaCor2(premiacao.indice)} cor={()=>logicaCor(premiacao.indice)}>
                            <ContentIndicePremio>
                              <LabelIndicePremio>
                                {premiacao.indice}
                              </LabelIndicePremio>
                            </ContentIndicePremio>
                            <ContentImagePremio>
                              <ImagePremio src={'http://localhost:3333/'+premiacao.image}/>
                            </ContentImagePremio>
                            <ContentNomePremio>
                              <NomePremio>
                                {premiacao.titulo}
                              </NomePremio>
                            </ContentNomePremio>
                          </ContainerPremio>
                        )
                      })
                    ):
                    (<></>)
                }
              </>
              )
            }
          </Content>
      </Container>
  );
}

export default Premiacoes;