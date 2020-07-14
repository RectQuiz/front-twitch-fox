import React, { useState, useEffect } from 'react';
import { RedesSociais, Header } from './components';
import { Container, ContainerHeader } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
  getUrlAuthTwitch,
  setStatus,
  setResponse,
  setUrlAuthTwitch
} from '../../store/modules/login/actions';

const Simple = (props) => {
  const { children } = props;
  const [ open, setOpen ] = useState(false);
  const dispatch = useDispatch();
  const { response, url_twitch, status, errors } = useSelector(({ LoginReducer }) => LoginReducer);
  const { status:statusModal } = useSelector(({ ModalReducer }) => ModalReducer);
  console.log('statusModal: ',statusModal);
  useEffect(()=>{
    // console.log('response home: ',response);
    // console.log('url_twitch home: ',url_twitch);
    // console.log('status home: ',status);
    // console.log('staerrorstus home: ',errors);
    if (status && status == 200 && (url_twitch && url_twitch.length > 0) && errors.length == 0) {
          window.location.assign(url_twitch);
          dispatch(setStatus(0));
          dispatch(setResponse({}));
          dispatch(setUrlAuthTwitch(''));
    }
  },[status]);

  const logar = async ()=>{
      dispatch(getUrlAuthTwitch());
  }
  
  return (
    <Container modal={statusModal} className="bg-white">
        <ContainerHeader>
          <RedesSociais/>
          <Header logar={logar} open={open} setOpen={setOpen}/>
        </ContainerHeader>
          {children}
    </Container>
  )
}

export default Simple;
