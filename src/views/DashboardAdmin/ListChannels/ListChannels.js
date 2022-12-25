import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
import { HeaderDashBoard } from "../../../components";
import { SelectItemMenuAdmin } from "../../../store/modules/menuAdmin/actions";
import {
  cadProductsSteam,
  setResponseProducts,
  setStatusProducts,
} from "../../../store/modules/products/actions";
import { loadInfoUser } from "../../../store/modules/user/actions";
import { ButtonActionProduct, ItensChannelsPartners } from "./components";
import { FaPlus, FaSteam } from "react-icons/fa";
import colors from "../../../styles/colors";

import {
  Content,
  BackgroundColor,
  ContentBodyDash,
  ContentRowDashBoard,
  ContentColumDashBoard,
} from "./styles";
import { useHistory } from "react-router";
import { loadChannelsAction } from "../../../store/modules/channel/actions";

function ListChannels() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalDetailItem, setModaDetailItem] = useState(false);
  const { loading: loadingUser } = useSelector(
    ({ UserReducer }) => UserReducer
  );
  const {
    channels,
    loading: loadingChannels,
    errors,
    status,
  } = useSelector(({ ChannelsReducer }) => ChannelsReducer);
  console.log("channels: ", channels);

  useEffect(() => {
    console.log("loadInfoUser DashboardAdmin");
    dispatch(loadInfoUser());
    dispatch(SelectItemMenuAdmin({ index: 6.1 }));
    dispatch(loadChannelsAction({}));
  }, [dispatch]);

  const load_channels = () => {
    dispatch(loadChannelsAction({}));
  };

  useEffect(() => {
    if (
      loadingChannels === false &&
      status === 201 &&
      errors &&
      errors.length === 0
    ) {
      dispatch(setStatusProducts(0));
      dispatch(setResponseProducts({}));
      dispatch(loadChannelsAction());
    }
  }, [dispatch, errors, loadingChannels, status]);

  const createChannel = () => {
    history.push("/dashboard/channels/create");
  };

  return (
    <Content>
      <BackgroundColor>
        {loadingUser ? (
          <ScaleLoader
            // css={override}
            color={colors.primary_geral}
            height={60}
            width={7}
            margin={7}
            loading={true}
          />
        ) : (
          <ContentBodyDash>
            <HeaderDashBoard
              reload={() => load_channels()}
              title={"Sua aréa de configuração dos canais parceiros"}
              subtitle={"Aréa de configuração dos canais parceiros."}
            />
            <ContentRowDashBoard>
              {channels && (
                <ItensChannelsPartners
                  load_channels={load_channels}
                  setModal={setModaDetailItem}
                  modal={modalDetailItem}
                  flex={channels.length > 0 ? 8 : 0}
                  channels={channels}
                  totalPages={1}
                  currentPage={1}
                  loading={loadingChannels}
                />
              )}
              <ContentColumDashBoard
                flex={channels && channels.length > 0 ? 2 : 1}
              >
                {channels && (
                  <ButtonActionProduct
                    iconButton={
                      <FaPlus size={50} color={colors.primary_dashboard} />
                    }
                    textButton={"Criar Canal"}
                    onClick={createChannel}
                    color1={colors.primary_geral}
                    color2={colors.primary_geral_dark}
                  />
                )}
              </ContentColumDashBoard>
            </ContentRowDashBoard>
          </ContentBodyDash>
        )}
        {/* <Footer/> */}
      </BackgroundColor>
    </Content>
  );
}

export default ListChannels;
