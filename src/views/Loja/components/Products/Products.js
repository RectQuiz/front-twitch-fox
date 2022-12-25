import React, { useState } from "react";
import { Container, Content, ContainerProducts } from "./styles";
import ReactPaginate from "react-paginate";
import ScaleLoader from "react-spinners/ScaleLoader";

import "./pagination.css";
import { ModalInfoProduct, CardProduct } from "../../../../components";
import { API_URL } from "../../../../services/config";
import colors from "../../../../styles/colors";

export default function Products({
  products,
  totalPages,
  currentPage,
  load_products,
  modal,
  setModal,
  loading,
}) {
  const [productSelect, setProductSelect] = useState(null);

  const pageClick = (e) => {
    console.log(e);
    let pageSelected = e.selected + 1;
    load_products(pageSelected);
  };

  const handleSelect = (product) => {
    console.log("handleSelect item");
    setProductSelect(product);
    setModal(true);
  };

  const handleClose = () => {
    console.log("handleClose item");
    setProductSelect(null);
    setModal(false);
  };

  // console.log('user: ',user);
  // console.log('products 1: ',products);
  return (
    <Container>
      <Content>
        {!loading ? (
          products.length > 0 ? (
            <ContainerProducts>
              {products.map((product, index) => {
                return (
                  <CardProduct
                    id={product._id}
                    floatvalue={product.floatvalue}
                    handleSelect={handleSelect}
                    key={index}
                    image={
                      product.imageurl
                        ? product.imageurl
                        : `${API_URL}/${product.imagepath}`
                    }
                    title={product.name}
                    weapon={product.weapon ? product.weapon : ""}
                    paint={product.paint ? product.paint : ""}
                    exterior={product.exterior ? product.exterior : ""}
                    type={product.type}
                    amount={product.amount}
                    price={product.price}
                    desc={product.exterior}
                    inspectLink={product.inspectGameLink}
                    promo={product.promo}
                    pricePromo={product.promo ? product.pricePromo : null}
                    stickers={
                      product.stickersinfo ? product.stickersinfo : null
                    }
                    price_real={product.price_real ? product.price_real : null}
                  />
                );
              })}
            </ContainerProducts>
          ) : (
            <></>
          )
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
      <ReactPaginate
        initialPage={currentPage - 1}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={pageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      {productSelect && (
        <ModalInfoProduct
          infoProduct={productSelect}
          show={modal}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
}
