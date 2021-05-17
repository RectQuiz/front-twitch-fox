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
import { 
  setErrorGeneral
} from '../../store/modules/error/actions';
import { ModalError } from '../../components';
import { loadInfoUser } from '../../store/modules/user/actions';

const Simple = (props) => {
  const { children } = props;
  const [ open, setOpen ] = useState(false);
  const [ nickname, setNickname] = useState(null);
  const dispatch = useDispatch();
  const { response, url_twitch, status, errors, loading } = useSelector(({ LoginReducer }) => LoginReducer);
  const { error_general, status_error, code_general } = useSelector(({ ErrorReducer }) => ErrorReducer);
  const { status:statusModal } = useSelector(({ ModalReducer }) => ModalReducer);
  const { user, users, loading:loadingUser, errors:errorsUser, status:statusUser } = useSelector(({ UserReducer }) => UserReducer);
  console.log("user Simple:",user);
  console.log("loadingUser Simple:",loadingUser);
  
  useEffect(()=>{
    const nickname = localStorage.getItem('@siteJokerz/nickname');
    const token = localStorage.getItem('@siteJokerz/token');
    if (nickname && token) {
        setNickname(nickname);
    }else{
        setNickname(null);
    }
  });
  
  useEffect(()=>{
    // console.log('response home: ',response);
    // console.log('url_twitch home: ',url_twitch);
    // console.log('status home: ',status);
    // console.log('staerrorstus home: ',errors);
    if (status && status == 200 && (url_twitch && url_twitch.length > 0) && errors.length == 0) {
          // window.location.assign(url_twitch);
          // dispatch(setStatus(0));
          // dispatch(setResponse({}));
          // dispatch(setUrlAuthTwitch(''));
    }
  },[status]);

  useEffect(()=>{
    // console.log('error_general general: ',error_general);
    // console.log('status_error general: ',status_error);
    // console.log('code_general general: ',code_general);
    if(status_error === true){
    }
  },[status_error]);

  const logar = async ()=>{
      dispatch(getUrlAuthTwitch());
  }

  return (
    <Container modal={statusModal}>
        <ModalError show={status_error}/>
        <ContainerHeader>
          <RedesSociais/>
          <Header
            nickname={nickname}
            loadingAuth={loading}
            logar={logar}
            open={open}
            setOpen={setOpen}
            user={user}
            loadingUser={loadingUser}
          />
        </ContainerHeader>
          {children}
    </Container>
  )
}

export default Simple;
