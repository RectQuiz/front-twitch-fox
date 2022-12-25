import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from "../../../components";
import {
  getUrlAuthTwitch,
  getUrlAuthTwitchLinkedAccountAction,
} from "../../../store/modules/login/actions";
import { SelectItemMenuAdmin } from "../../../store/modules/menuAdmin/actions";
import { restorePointsStreamElementsAction } from "../../../store/modules/points/actions";
import {
  setStatuspubSub,
  syncPointsTwitchAction,
} from "../../../store/modules/twitchPubSub/actions";
import { loadInfoUser } from "../../../store/modules/user/actions";
import {
  LinkedAccounts,
  PointsConfig,
  StreamElementsConfig,
} from "./components";

import { Content, BackgroundColor, ContentBodyDash } from "./styles";
// import { FormLogin } from './components';

function UserConfigDashBoard() {
  const dispatch = useDispatch();
  const [streamerPermission, setStreamerPermission] = useState(false);
  const [restoreStreamElements, setrestoreStreamElements_] = useState(false);
  const [adminPermission, setAdminPermission] = useState(false);
  const [statusPubSub, setStatusPubSub] = useState(false);
  const [pointsSyncTwitch, setPointsSyncTwitch_] = useState(false);
  const { id_user } = useParams();
  const {
    user,
    users,
    loading: loadingUser,
    errors: errorsUser,
    status: statusUser,
  } = useSelector(({ UserReducer }) => UserReducer);
  const { loading: loadingPoints } = useSelector(
    ({ PointsReducer }) => PointsReducer
  );
  const [existTwitch, setExistTwitch] = useState(false);
  const [existStreamElements, setExistStreamElements] = useState(false);
  console.log("user: ", user);
  console.log("adminPermission: ", adminPermission);
  console.log("statusPubSub: ", statusPubSub);
  console.log("streamerPermission: ", streamerPermission);

  useEffect(() => {
    console.log("loadInfoUser DashboardAdmin UserConfigDashBoard");
    dispatch(loadInfoUser());
    dispatch(SelectItemMenuAdmin({ index: 3.1 }));
  }, [dispatch]);

  function reload() {
    dispatch(loadInfoUser());
  }

  useEffect(() => {
    function getpermission(indice) {
      let status = false;
      let permissions = user && user.permissions ? user.permissions : [];
      if (permissions.length > 0) {
        for (let i = 0; i < permissions.length; i++) {
          status =
            permissions[i].ifo_permission.indice == indice ? true : false;
          if (status) {
            break;
          }
        }
      }
      return status;
    }

    function getStatuspubSub(account) {
      let status = false;
      let accountsLinks = user && user.accountsLinks ? user.accountsLinks : [];
      if (accountsLinks.length > 0) {
        for (let i = 0; i < accountsLinks.length; i++) {
          console.log(
            "accountsLinks[i].info_accountLink.name: ",
            accountsLinks[i].info_accountLink.name
          );
          console.log("account: ", account);
          let ok =
            accountsLinks[i].info_accountLink.name == account ? true : false;
          if (ok) {
            status = accountsLinks[i].info_accountLink.statusPubSub
              ? true
              : false;
            break;
          }
        }
      }
      return status;
    }
    let streamer = getpermission(2);
    let restoreStreamElements_ =
      user && user.restoreStreamElements ? user.restoreStreamElements : false;
    setStreamerPermission(streamer);
    setrestoreStreamElements_(restoreStreamElements_);

    let admin = getpermission(1);
    let statusPubSub_ = getStatuspubSub("twitch");
    let pointsSyncTwitch_ =
      user && user.pointsSyncTwitch ? user.pointsSyncTwitch : false;

    let verifyTwitch =
      user &&
      user.accountsLinks.filter((accountsLinkTwitch) => {
        return accountsLinkTwitch.info_accountLink.name === "twitch";
      });
    let verifyStreamelements =
      user &&
      user.accountsLinks.filter((accountsLinkTwitch) => {
        return accountsLinkTwitch.info_accountLink.name === "streamelements";
      });
    setAdminPermission(admin);
    setStatusPubSub(statusPubSub_);
    setPointsSyncTwitch_(pointsSyncTwitch_);
    setExistTwitch(verifyTwitch && verifyTwitch.length > 0);
    setExistStreamElements(
      verifyStreamelements && verifyStreamelements.length > 0
    );
  }, [user]);

  function linkedAccount(name) {
    switch (name) {
      case "twitch":
        dispatch(
          getUrlAuthTwitchLinkedAccountAction({ state: user ? user._id : "" })
        );
        break;

      default:
        break;
    }
  }

  function changeStatusPubSub(status) {
    console.log("changeStatusPubSub");
    dispatch(setStatuspubSub({ active: status }));
  }

  function restorePointsStreamElements() {
    console.log("restorePointsStreamElements");
    dispatch(restorePointsStreamElementsAction());
  }

  function syncPointsTwitch(status) {
    console.log("syncPointsTwitch");
    dispatch(syncPointsTwitchAction({ active: status }));
  }

  return (
    <Content>
      <BackgroundColor>
        {loadingUser ? (
          <ScaleLoader
            // css={override}
            color="#DC143C"
            height={60}
            width={7}
            margin={7}
            loading={true}
          />
        ) : (
          <ContentBodyDash>
            <HeaderDashBoard
              reload={reload}
              title={"Configuração"}
              subtitle={"Aréa para configuração da sua conta."}
            />
            <LinkedAccounts linkedAccount={linkedAccount} user={user} />
            {existTwitch && (
              <PointsConfig
                adminPermission={adminPermission}
                changeStatusPubSub={changeStatusPubSub}
                statusPubSub={statusPubSub}
                pointsSyncTwitch={pointsSyncTwitch}
                syncPointsTwitch={syncPointsTwitch}
              />
            )}
            {existStreamElements && (
              <StreamElementsConfig
                loading={loadingPoints}
                streamerPermission={streamerPermission}
                restorePointsStreamElements={restorePointsStreamElements}
                restoreStreamElements={restoreStreamElements}
              />
            )}
          </ContentBodyDash>
        )}
        {/* <Footer/> */}
      </BackgroundColor>
    </Content>
  );
}

export default UserConfigDashBoard;
