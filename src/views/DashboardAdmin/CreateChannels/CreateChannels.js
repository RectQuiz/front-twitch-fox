import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from "../../../components";
import {
  createChannelAction,
  loadChannelsAction,
} from "../../../store/modules/channel/actions";
import { SelectItemMenuAdmin } from "../../../store/modules/menuAdmin/actions";
import {
  cadastrarProduct,
  loadProducts,
  setResponseProducts,
  setStatusProducts,
} from "../../../store/modules/products/actions";
import { loadInfoUser } from "../../../store/modules/user/actions";
import colors from "../../../styles/colors";
import { FormCadProduct, FormCardChannel } from "./components";

import { Content, BackgroundColor, ContentBodyDash } from "./styles";

function CreateChannels({ history }) {
  const dispatch = useDispatch();
  const { user, loading: loadingUser } = useSelector(
    ({ UserReducer }) => UserReducer
  );
  const {
    loading: loadingChannels,
    status,
    errors,
  } = useSelector(({ ChannelsReducer }) => ChannelsReducer);
  console.log("user: ", user);

  useEffect(() => {
    console.log("loadInfoUser CreateChannel");
    dispatch(loadInfoUser());
    dispatch(SelectItemMenuAdmin({ index: 2.2 }));
  }, [dispatch]);

  useEffect(() => {
    if (
      loadingChannels === false &&
      status === 201 &&
      errors &&
      errors.length === 0
    ) {
      dispatch(setStatusProducts(0));
      dispatch(setResponseProducts({}));
      dispatch(loadChannelsAction({}));
      history.push("/dashboard/loja");
    }
  }, [dispatch, errors, history, loadingChannels, status]);

  function registerChannel(values) {
    const data = new FormData();

    values.permissions = JSON.stringify(values.permissions_);
    Object.keys(values).forEach((key) => {
      if (key !== "permissions_") data.append(key, values[key]);
    });

    console.log("data: ", data);

    dispatch(createChannelAction(data));
  }

  return (
    <Content>
      <BackgroundColor>
        {loadingUser || loadingChannels ? (
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
              title={"Cadastrar canal"}
              subtitle={"Áre para cadastrar um novo cannal."}
            />
            <FormCardChannel
              permissions={user && user.permissions}
              registerChannel={registerChannel}
            />
          </ContentBodyDash>
        )}
        {/* <Footer/> */}
      </BackgroundColor>
    </Content>
  );
}

export default CreateChannels;
