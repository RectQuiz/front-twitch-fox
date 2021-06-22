import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { loadInfoUser } from '../../store/modules/user/actions';
import ScaleLoader from "react-spinners/ScaleLoader";

import { 
  Content,
  BackgroundColor,
  ContentInfoPoints,
  PointsLabel,
  PointsValue,

  ContentSelect,
  ContainerSelectInput,
  LabelSelect,

  ContentTrocarCanal,
  ContainerButtonTrocarCanal,

  ContainerInput,
  InputValue
} from './styles';
import { loadProducts } from '../../store/modules/products/actions';
import { Footer } from '../../components';
import { RoletaComp } from './components';
import { GiPopcorn } from 'react-icons/gi';
import SucessoRoletaSound from '../../assets/sounds/ganhou_roleta.mp3';
import PerdaRoletaSound from '../../assets/sounds/perda_roleta.mp3';
import InicioRoletaSound from '../../assets/sounds/inicio_roleta.mp3';
import ErroRoletaSound from '../../assets/sounds/erro_roleta.mp3';
import { acionarRoletaAction } from '../../store/modules/points/actions';
import Select from 'react-select';
import { loadChannelsAction } from '../../store/modules/channel/actions';
import { setAlert } from '../../store/modules/alerts/actions';
import { Helmet } from 'react-helmet';

function Roleta({canais}) {
  const { status } = useSelector(({ ModalReducer }) => ModalReducer);
  const [ sucessoRoletaMusic, setSucessoRoletaMusic ] = useState(new Audio(SucessoRoletaSound));
  const [ inicioRoletaMusic, setInicioRoletaMusic ] = useState(new Audio(InicioRoletaSound));
  const [ erroRoletaMusic, setErroRoletaMusic ] = useState(new Audio(ErroRoletaSound));
  const [ selectChannels, setSelectChannels ] = useState([]);
  const [ valorAposta, setValorAposta ] = useState(0);
  const [ animationButton, setAnimationButton ] = useState('go-back');
  const [ ativa, setAtiva ] = useState(true);
  const [ perdaRoletaMusic, setPerdaRoletaMusic ] = useState(new Audio(PerdaRoletaSound));
  const [ channelSelected, setChannelSelected ] = useState({ value: '', label: 'SELECIONE::::', id_person:''});
  const { user, loading } = useSelector(({ UserReducer }) => UserReducer);
  const { channels, loading:loadingChannels, errors:errorsChannles, status:statusChannels } = useSelector(({ ChannelsReducer }) => ChannelsReducer);
  const { loading:loadingPoints, errors, status:statusPoints } = useSelector(({ PointsReducer }) => PointsReducer);
  const dispatch = useDispatch();

  const typesTradable = [
      { value:true, label: 'Comercializável' },
      { value:false, label: 'Não comercializável' }
  ];
  // const [ modalInfoProduct, setModalInfoProduct ] = useState(false);
    console.log('channels: ',channels);
    console.log('selectChannels: ',selectChannels);

  useEffect(()=>{
    if (channels && channels.length > 0) {
      let selects = channels.map((canal)=>{
          return {
              value:canal.name,
              label:canal.name,
              id_person:canal._id
          }
      });
      setSelectChannels(selects);
    }
  },[channels]);

  useEffect(()=>{
      sucessoRoletaMusic.preload = 'auto';
      inicioRoletaMusic.preload = 'auto';
      erroRoletaMusic.preload = 'auto';
      dispatch(loadInfoUser());
      dispatch(loadChannelsAction({}));
      load_products(1);
  },[]);

  const load_products = async(page)=>{
    dispatch(loadProducts({page:page, status:"emEstoque"}));
  };

  function acionarRoleta() {
    if (channelSelected.id_person.length > 0 && valorAposta >= 10 && isNaN(valorAposta) === false) {
      dispatch(acionarRoletaAction({id_channel:channelSelected.id_person,pontos:parseInt(valorAposta)}));
    }else{
      dispatch(setAlert({
        message:'Erro ao acionar a roleta, tente novamente',
        tipo:'error',
        time:1000
      }));
      setAtiva(true);
      setAnimationButton('go-back');
    }
  }
  
  const selectChannel = (selectedOption) => {
    setChannelSelected(selectedOption);
  };

  function trocarCanal() {
    setChannelSelected({ value: '', label: 'SELECIONE::::', id_person:''});
  }

  function girarRoleta() {
    if (ativa) {
      if (isNaN(valorAposta) === false) {
        if (valorAposta >= 10) {
          acionarRoleta();
          setAtiva(false);
          setAnimationButton('null');
          // let result = percentageChance(['não', 'sim'], [55, 45]);
        }else{
          erroRoletaMusic.play();
          dispatch(setAlert({
            message:'Erro ao acionar a roleta, valor deve ser maior que 10',
            tipo:'error',
            time:1500
          }));
        }
      }else{
        erroRoletaMusic.play();
        dispatch(setAlert({
          message:'Erro ao acionar a roleta, valor de aposta inválido',
          tipo:'error',
          time:1500
        }));
      }
    }else{
      dispatch(setAlert({
        message:'Espere um pouco',
        tipo:'warning',
        time:1000
      }));
    }

  }

  return(
    <Content modal={status}>
          <Helmet>
          <title>Roleta jokerz</title>
        </Helmet>
        <BackgroundColor>
            {

              <>
                {
                  user?
                  (
                    <>
                    {
                      channelSelected.id_person.length > 0&&
                      (
                        <ContentInfoPoints>
                            <PointsLabel>
                                Seus Pontos: 
                            </PointsLabel>
                            <PointsValue>
                              {
                                !loading?
                                (
                                  <>
                                    {user.points} <GiPopcorn/>
                                  </>
                                ):
                                (
                                  <ScaleLoader
                                      // css={override}
                                      color="#DC143C"
                                      height={20}
                                      width={3}
                                      margin={2}
                                      loading={true}
                                  />
                                )
                              }
                            </PointsValue>
                        </ContentInfoPoints>
                      )
                    }
                    </>
                  ):
                  (
                      <ScaleLoader
                          // css={override}
                          color="#DC143C"
                          height={60}
                          width={7}
                          margin={7}
                          loading={true}
                      />
                  )
                }
                {
                  user && channelSelected.id_person.length > 0 &&
                  (
                    <ContentSelect>
                        <ContainerSelectInput>
                            <LabelSelect>
                              Qual o valor irá apostar?
                            </LabelSelect>
                            <ContainerInput>
                                <InputValue
                                        type="number"
                                        value={valorAposta}
                                        onChange={(e)=>setValorAposta(e.target.value)}
                                        onKeyPress={(e)=>{if (e.charCode === 13) girarRoleta()}}
                                />
                            </ContainerInput>
                        </ContainerSelectInput>
                    </ContentSelect>
                  )
                }
                {
                  user && channelSelected.id_person.length > 0 &&
                  (
                    <RoletaComp
                      loading={loadingPoints}
                      acionarRoleta={acionarRoleta}
                      sucessoRoletaMusic={sucessoRoletaMusic}
                      perdaRoletaMusic={perdaRoletaMusic}
                      inicioRoletaMusic={inicioRoletaMusic}
                      erroRoletaMusic={erroRoletaMusic}
                      valorAposta={valorAposta}
                      ativa={ativa}
                      setAtiva={setAtiva}
                      animationButton={animationButton}
                      setAnimationButton={setAnimationButton}
                      girarRoleta={girarRoleta}
                    />
                  )
                }
                {
                  user && (selectChannels.length > 0 && channels && !loadingChannels) && channelSelected.id_person.length == 0 &&
                  (
                    <ContentSelect>
                        <ContainerSelectInput>
                            <LabelSelect>
                              Qual o canal:
                            </LabelSelect>
                            <Select
                                value={channelSelected}
                                onChange={selectChannel}
                                options={selectChannels}
                            />
                        </ContainerSelectInput>
                    </ContentSelect>
                  )
                }
                {
                  user && channelSelected.value.length > 0 &&
                  (
                    <ContentTrocarCanal onClick={trocarCanal}>
                        <ContainerButtonTrocarCanal>
                              Trocar canal
                        </ContainerButtonTrocarCanal>
                    </ContentTrocarCanal>
                  )
                }
              </>
            }
            <Footer/>
        </BackgroundColor>
    </Content>
  ) ;
}

export default Roleta;