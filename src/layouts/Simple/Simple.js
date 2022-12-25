import React, { useState, useEffect } from "react";
import { RedesSociais, Header } from "./components";
import { Container, ContainerHeader } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getUrlAuthTwitch } from "../../store/modules/login/actions";
import { setErrorGeneral } from "../../store/modules/error/actions";
import { AlertMessageSimple } from "../../components";
import { setAlert } from "../../store/modules/alerts/actions";
import { setStatusModal } from "../../store/modules/modal/actions";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { loadChannelByNameAction } from "../../store/modules/channel/actions";

const Simple = (props) => {
  const { children, header } = props;
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { name_channel } = useParams();
  console.log("name_channel: ", name_channel);
  const { loading } = useSelector(({ LoginReducer }) => LoginReducer);
  const { error_general, status_error, code_general } = useSelector(
    ({ ErrorReducer }) => ErrorReducer
  );
  const { status: statusModal } = useSelector(
    ({ ModalReducer }) => ModalReducer
  );
  const { user, loading: loadingUser } = useSelector(
    ({ UserReducer }) => UserReducer
  );
  const { channel, loading: loadingChannels } = useSelector(
    ({ ChannelsReducer }) => ChannelsReducer
  );
  // console.log("user Simple:",user);
  // console.log("loadingUser Simple:",loadingUser);

  useEffect(() => {
    dispatch(loadChannelByNameAction(name_channel));
    const nickname = localStorage.getItem("@siteJokerz/nickname");
    const token = localStorage.getItem("@siteJokerz/token");
    if (nickname && token) {
      setNickname(nickname);
    } else {
      setNickname(null);
    }
  }, [dispatch, name_channel]);

  useEffect(() => {
    if (status_error === true) {
      if (code_general == 401) {
        localStorage.removeItem("@siteJokerz/token");
        localStorage.removeItem("@siteJokerz/nickname");
        history.push("/home");
        dispatch(
          setAlert({
            message: error_general,
            tipo: "error",
            time: 10000,
          })
        );
        dispatch(setStatusModal(false));
        dispatch(setErrorGeneral("", false, 0));
      } else {
        dispatch(
          setAlert({
            message: error_general,
            tipo: "error",
            time: 10000,
          })
        );
        dispatch(setStatusModal(false));
        dispatch(setErrorGeneral("", false, 0));
        // history.push('home');
      }
    }
  }, [code_general, dispatch, error_general, history, status_error]);

  useEffect(() => {
    console.log("loadingChannels: ", loadingChannels);
    console.log("channel: ", channel);
    console.log("header: ", header);
    if (loadingChannels === false && channel === false && header != false) {
      console.log("aqui");
      history.replace("/home");
    }
  }, [channel, header, history, loadingChannels]);

  const logar = async () => {
    dispatch(getUrlAuthTwitch());
  };

  return (
    <Container modal={statusModal}>
      {/* <ModalError show={status_error}/> */}
      <AlertMessageSimple />
      <ContainerHeader>
        <RedesSociais channel={channel} />
        <Header
          loadingChannels={loadingChannels}
          channel={channel}
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
  );
};

export default Simple;
