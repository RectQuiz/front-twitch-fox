import React, { useEffect } from "react";
import CarouselComp from "./components/CarouselComp";
import Cards from "./components/Cards";
import Promo from "./components/Promo";
import Divider from "./components/Divider";
import Parceiros from "./components/Parceiros";
import fundo from "../../assets/images/fundo_nath.jpg";
import Footer from "../../components/Footer";
import { BackgroundColor, Content } from "./styles";
import { loadInfoUser } from "../../store/modules/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store/modules/products/actions";
import { loadParceirosAction } from "../../store/modules/channel/actions";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Helmet } from "react-helmet";

export default function Home({ history }) {
  const dispatch = useDispatch();
  const { products } = useSelector(({ ProductsReducer }) => ProductsReducer);
  const { channel } = useSelector(({ ChannelsReducer }) => ChannelsReducer);

  useEffect(() => {
    const load_products = async (page) => {
      dispatch(
        loadProducts({
          page: page,
          channel_id: channel ? channel.id_person._id : null,
          status: "emEstoque",
          filtroPrice: "up",
        })
      );
    };
    const token = localStorage.getItem("@siteJokerz/token");
    console.log("token Home: ", token);
    if (token) {
      console.log("loadInfoUser Home");
      dispatch(loadInfoUser());
    }
    load_products(1);
    dispatch(loadParceirosAction({}));
  }, [channel, dispatch]);

  return (
    <Content fundo={fundo}>
      <Helmet>
        <title> {channel ? `${channel.name}` : "Home"}</title>
      </Helmet>
      <CarouselComp />
      <BackgroundColor>
        <Cards />
        {products && products.length > 0 && <Divider title="Produtos" />}
        {products && products.length > 0 && <Promo products={products} />}

        {/* <Divider title='Lives parceiras'/> */}
        {/* {!loadingChannels ? (
          <Parceiros channels={channels} />
        ) : (
          <ScaleLoader
            // css={override}
            color="#DC143C"
            height={60}
            width={7}
            margin={7}
            loading={true}
          />
        )} */}
        <Footer />
      </BackgroundColor>
    </Content>
  );
}
