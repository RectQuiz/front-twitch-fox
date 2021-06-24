import React, { useEffect, useRef, useState } from 'react';

import {
    Container,
    Content,
    ButtonRoleta,
    ContentCentroRoleta,
    ContentItemRoleta,
    LabelItemRoleta,
    ImageItemRoleta,
    ContentButton,
    ImageButton,
    ContentLoading,
    ContentImageCanal
} from './styles';
import './styleRoleta.css';
import Item1Roleta from '../../../../assets/images/item1_roleta.png';
import Item2Roleta from '../../../../assets/images/item2_roleta.png';
import logo from '../../../../assets/images/logo.png';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useDispatch, useSelector } from 'react-redux';
import { setResponseRedeemPoints, setStatusRedeemPoints } from '../../../../store/modules/points/actions';
import { loadInfoUser } from '../../../../store/modules/user/actions';
import { setAlert } from '../../../../store/modules/alerts/actions';

function RoletaComp({
  sucessoRoletaMusic,
  perdaRoletaMusic,
  acionarRoleta,
  inicioRoletaMusic,
  erroRoletaMusic,
  loading,
  valorAposta,
  ativa,
  setAtiva,
  animationButton,
  setAnimationButton,
  girarRoleta,
  channelSelected
}) {
  const dispatch = useDispatch();
  const [ deg, setDeg ] = useState(null);
  const [ animation, setAnimation ] = useState('null');
  const [ orderRoleta, setOrderRoleta ] = useState([]);
  const [ index_atual, setIndex_atual ] = useState(0);
  const refRoleta = useRef();
  let count = false;
  const { respRoleta, loading:loadingPoints, errors, status:statusPoints } = useSelector(({ PointsReducer }) => PointsReducer);

  const sim = [0,2,4,6];
  const nao = [1,3,5,7];
  console.log("channelSelected: ",channelSelected);
  
  useEffect(()=>{
    if (loadingPoints == false && statusPoints == 201 && errors.length == 0) {
      dispatch(setStatusRedeemPoints(0));
      dispatch(setResponseRedeemPoints({}));
      if (respRoleta) {
        console.log("respRoleta: ",respRoleta);
        inicioRoletaMusic.play();
        // let mult_deg_rand = percentageChance(nao, [25,25,25,25]);
        console.log("respRoleta.roleta_indice: ",respRoleta.roleta_indice);
        calculaGrau(respRoleta.roleta_indice);
        setTimeout(() => {
          if (respRoleta.data > 0) {
            sucessoRoletaMusic.play();
            setAnimation('pisca');
          }
          if (respRoleta.data < 0) {
            perdaRoletaMusic.play();
            setAnimation('treme');
          }
          setTimeout(() => {
            setAnimation('null');
            dispatch(loadInfoUser());
            setAtiva(true);
            setAnimationButton('go-back');
          }, 100);
        }, 15000);
        
      } else {
        erroRoletaMusic.play();
        dispatch(setAlert({
          message:'Erro ao acionar a roleta',
          tipo:'error',
          time:5000
        }));
      }
    }
    if (statusPoints == 500 || statusPoints == 400) {
      erroRoletaMusic.play();
      setAtiva(true);
    }
  },[statusPoints]);

  useEffect(()=>{
    let orderRoleta_temp = orderRoleta;
    console.log("channelSelected.roleta: ",channelSelected.roleta);
    if (channelSelected.roleta && channelSelected.roleta.length > 0) {
      for (let i = 0; i < channelSelected.roleta.length; i++) {
        let campos = channelSelected.roleta[i].campos;
        for (let j = 0; j < campos.length; j++) {
          orderRoleta_temp[campos[j]] = channelSelected.roleta[i];
          setOrderRoleta([...orderRoleta_temp]);
        }
      }
    }
    console.log("orderRoleta_temp: ",orderRoleta_temp);
  },[channelSelected]);

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
    let grau_novo = index_novo == 0?360:index_novo * 45;
    let grau_atual = index_atual * 45;
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
    let _deg = deg + (mult_certo * 45) + 2520;
    setDeg(_deg);
    setIndex_atual(index_novo);
  }

  return (
    channelSelected._id.length > 0 && orderRoleta.length == 8 &&
    (
      <Container>
          <Content>
            <ContentCentroRoleta ref={refRoleta} style={{animation:` ${animation} 0.1s`,transform: `rotateZ(-${deg}deg)`}}>
                {
                  orderRoleta.map((item)=>{
                    count = !count;
                    return(
                      <ContentItemRoleta>
                          <LabelItemRoleta>
                            {item.name}
                          </LabelItemRoleta>
                          <ImageItemRoleta
                            src={count?Item2Roleta:Item1Roleta}
                          />
                      </ContentItemRoleta>
                    )
                  })
                }
            </ContentCentroRoleta> 
            <ButtonRoleta onClick={girarRoleta} title="TITLE TEXT.">
              <ContentButton style={{animation:` ${animationButton} 1s infinite alternate`}}>
                          {
                            !loading?
                            (
                              <ContentImageCanal>
                                <ImageButton
                                  src={channelSelected.id_person && channelSelected.id_person.picture?channelSelected.id_person.picture:logo}
                                />
                              </ContentImageCanal>
                            ):
                            (
                              <ContentLoading>
                                <ScaleLoader
                                    // css={override}
                                    color="#DC143C"
                                    height={20}
                                    width={5}
                                    margin={2}
                                    loading={true}
                                />
                              </ContentLoading>
                            )
                          }
              </ContentButton>
            </ButtonRoleta>
            
          </Content>
      </Container>
    )
  );
}

export default RoletaComp;