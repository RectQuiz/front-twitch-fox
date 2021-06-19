import React, { useEffect, useState } from 'react';

import {
    Container,
    Content,
    ButtonRoleta,
    ContentCentroRoleta,
    ContentItemRoleta,
    LabelItemRoleta
} from './styles';
import './styleRoleta.css';

function RoletaComp() {
  const [ deg, setDeg ] = useState(0);
  const [ index_atual, setIndex_atual ] = useState(0);
  const sim = [0,2,4,6];
  const nao = [1,3,5,7];

  useEffect(()=>{
    // console.log("deg: ",deg);
  },[deg]);
  
  function arrayShuffle(array) {
    for ( var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++ ) {
      swap        = Math.floor(Math.random() * (i + 1));
      temp        = array[swap];
      array[swap] = array[i];
      array[i]    = temp;
    }
    return array;
  };

  function percentageChance(values, chances) {
    for ( var i = 0, pool = []; i < chances.length; i++ ) {
      for ( var i2 = 0; i2 < chances[i]; i2++ ) {
          pool.push(i);
      }
    }
    return values[arrayShuffle(pool)['0']];
  };
  
  function calculaGrau(index_novo) {
    // console.log("index_atual: ",index_atual);
    // console.log("index_novo: ",index_novo);
    let grau_novo = index_novo == 0?360:index_novo * 45;
    let grau_atual = index_atual * 45;
    // console.log("grau_novo: ",grau_novo);
    // console.log("grau_atual: ",grau_atual);
    let mult_certo = 0;

    if (index_novo == index_atual) {
      mult_certo = 8;
    }else if(grau_novo > grau_atual){
      mult_certo = (grau_atual - grau_novo)/45;
    }else if(grau_novo < grau_atual){
      let temp = 8 - ((grau_atual - grau_novo)/45);
      mult_certo = temp;
    }
    
    mult_certo = mult_certo < 0?mult_certo*-1:mult_certo;
    // console.log("mult_certo: ",mult_certo);
    let _deg = deg + (mult_certo * 45) + 1080;
    setDeg(_deg);
    setIndex_atual(index_novo);
  }

  function girarRoleta() {
    let result = percentageChance(['não', 'sim'], [55, 45]);
    // console.log("result: ",result);

    if (result == 'não') {
      let mult_deg_rand = percentageChance(nao, [25,25,25,25]);
      calculaGrau(mult_deg_rand);
    }

    if (result == 'sim') {
      let mult_deg_rand = percentageChance(sim, [25,25,25,25]);
      calculaGrau(mult_deg_rand);
    }

  }

  return (
    <Container>
        <Content>
          <ContentCentroRoleta style={{ transform: `rotateZ(-${deg}deg)`}}>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    DOBRA
                  </LabelItemRoleta>
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    PERDE
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    DOBRA
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    PERDE
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    DOBRA
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    PERDE
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    DOBRA
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
              <ContentItemRoleta>
                  <LabelItemRoleta>
                    PERDE
                  </LabelItemRoleta>
          
              </ContentItemRoleta>
          </ContentCentroRoleta> 
          <ButtonRoleta onClick={girarRoleta} title="TITLE TEXT.">
            Girar
          </ButtonRoleta>
          
        </Content>
    </Container>
  );
}

export default RoletaComp;