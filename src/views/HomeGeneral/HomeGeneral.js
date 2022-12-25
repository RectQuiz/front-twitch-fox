import React, { useEffect } from "react";
import Parceiros from "./components/Parceiros";
import fundo from "../../assets/images/fundo_nath.jpg";
import Footer from "../../components/Footer";
import { BackgroundColor, Content } from "./styles";
import { loadInfoUser } from "../../store/modules/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store/modules/products/actions";
import { loadParceirosAction } from "../../store/modules/channel/actions";
import ScaleLoader from "react-spinners/ScaleLoader";
import colors from "../../styles/colors";
import { Helmet } from "react-helmet";

export default function HomeGeneral({ history }) {
  const dispatch = useDispatch();
  const {
    channel,
    channels,
    loading: loadingChannels,
  } = useSelector(({ ChannelsReducer }) => ChannelsReducer);

  useEffect(() => {
    const token = localStorage.getItem("@siteJokerz/token");
    console.log("token HomeGeneral: ", token);
    if (token) {
      console.log("loadInfoUser HomeGeneral");
      dispatch(loadInfoUser());
    }
    dispatch(loadParceirosAction({}));
  }, [channel, dispatch]);

  return (
    <Content fundo={fundo}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BackgroundColor>
        {!loadingChannels ? (
          <Parceiros channels={channels} />
        ) : (
          <ScaleLoader
            // css={override}
            color={colors.primary_geral}
            height={60}
            width={7}
            margin={7}
            loading={true}
          />
        )}
        <Footer />
      </BackgroundColor>
    </Content>
  );
}
