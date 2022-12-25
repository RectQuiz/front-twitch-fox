import React, { useState } from "react";
import { CardProduct, ModalInfoProduct } from "../../../../../components";
import ScaleLoader from "react-spinners/ScaleLoader";

import ReactPaginate from "react-paginate";
import { API_URL } from "../../../../../services/config";
import { Container, Content, ContainerProducts } from "./styles";
import "./pagination.css";
import { useHistory } from "react-router";
import colors from "../../../../../styles/colors";
import { useDispatch } from "react-redux";
import {
  changeStatusProductAction,
  deleteProductAction,
} from "../../../../../store/modules/products/actions";
import { Partner } from "./components";

function ItensChannelsPartners({
  channels,
  totalPages,
  flex,
  setModal,
  modal,
  load_channels,
  loading,
  currentPage,
}) {
  const dispatch = useDispatch();
  const [channelSelect, setChannelSelect] = useState(null);
  const history = useHistory();

  const pageClick = (e) => {
    console.log(e);
    let pageSelected = e.selected + 1;
    load_channels(pageSelected);
  };

  const deleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };

  const OpenDetailPartner = (id) => {};

  return channels.length > 0 ? (
    <Container flex={flex}>
      <Content>
        {!loading ? (
          <ContainerProducts>
            {channels.map((channel, index) => {
              return (
                <Partner
                  key={index}
                  parceiro={channel}
                  OpenDetailPartner={OpenDetailPartner}
                />
              );
            })}
          </ContainerProducts>
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
      </Content>
      {/* <ReactPaginate
        initialPage={currentPage - 1}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={pageClick}
        containerClassName={"paginationDash"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      /> */}
      {/* {productSelect && (
        <ModalInfoProduct
          infoProduct={productSelect}
          show={modal}
          handleClose={handleClose}
        />
      )} */}
    </Container>
  ) : (
    <></>
  );
}

export default ItensChannelsPartners;
