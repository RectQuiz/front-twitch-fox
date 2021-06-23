import React, { useState } from 'react';
import {
    Container,
    Content,
    ContainerProducts,
    ContentInfoPoints,
    PointsLabel,
    PointsValue,
    ContainerFiltros,
    ContainerItemTypeFiltro,
    ContentItemType,
    ContentImageFiltro,
    LogoFiltro,
    DividerFiltros,
    ContainerFiltroSecond,
    ContinueLeft,
    ContinueRight,
    LabelFiltro
  } from './styles';
import ReactPaginate from 'react-paginate';
import ScaleLoader from "react-spinners/ScaleLoader";

import './pagination.css';
import { GiPopcorn } from 'react-icons/gi';
import { ModalInfoProduct, CardProduct } from '../../../../components';
import { API_URL } from '../../../../services/config';
import rifle from '../../../../assets/images/rifle.png';
import Sniper_Rifle from '../../../../assets/images/Sniper_Rifle.png';
import others from '../../../../assets/images/others.png';
import agents from '../../../../assets/images/agents.png';
import stickers from '../../../../assets/images/stickers.png';
import gloves from '../../../../assets/images/gloves.png';
import machineguns from '../../../../assets/images/machineguns.png';
import shotguns from '../../../../assets/images/shotguns.png';
import knife from '../../../../assets/images/knife.png';
import SMGs from '../../../../assets/images/SMGs.png';
import pistols from '../../../../assets/images/pistols.png';

export default function Products({
    products,
    totalPages,
    currentPage,
    load_products,
    modal,
    setModal,
    user,
    loading,
    filtros_type,
    filtrarType
}){
    const [ productSelect, setProductSelect ] = useState(null);


    function filtroInfoFiltros(filtro) {
        switch (filtro._id) {
            case "Pistol":
                return {
                    nome:"Pistol",
                    image:pistols
                }
            case "Rifle":
                return {
                    nome:"Rifle",
                    image:rifle
                }
            case "Sniper Rifle":
                return {
                    nome:"Sniper Rifle",
                    image:Sniper_Rifle
                }
            case "SMG":
                return {
                    nome:"SMG",
                    image:SMGs
                }
            case "Shotgun":
                return {
                    nome:"Shotgun",
                    image:shotguns
                }
            case "Machinegun":
                return {
                    nome:"Machinegun",
                    image:machineguns
                }
            case "Knife":
                return {
                    nome:"Knife",
                    image:knife
                }
            case "Glove":
                return {
                    nome:"Glove",
                    image:gloves
                }
            case "Sticker":
                return {
                    nome:"Sticker",
                    image:stickers
                }
            case "Agent":
                return {
                    nome:"Agent",
                    image:agents
                }
            case "Other":
                return {
                    nome:"Other",
                    image:others
                }
        
            default:
                return {
                    nome:"Other",
                    image:others
                }
                break;
        }
    }

    const pageClick = (e)=>{
        console.log(e);
        let  pageSelected = e.selected + 1;
        load_products(pageSelected);
    }

    const handleSelect = (product)=>{
        console.log('handleSelect item');
        setProductSelect(product);
        setModal(true);
    }
    
    const handleClose = ()=>{
        console.log('handleClose item');
        setProductSelect(null);
        setModal(false);
    }

    // console.log('user: ',user);
    // console.log('products 1: ',products);
    return (
                    <Container>
                        <Content>

                            {
                                !loading?
                                (
                                    products.length > 0?
                                    (
                                        <ContainerProducts>
                                            {
                                                products.map((product,index)=>{
                                                    return (
                                                        <CardProduct
                                                            id={product._id}
                                                            floatvalue={product.floatvalue}
                                                            handleSelect={handleSelect}
                                                            key={index}
                                                            image={product.imageurl?product.imageurl:`${API_URL}/${product.imagepath}`}
                                                            title={product.name}
                                                            weapon={product.weapon?product.weapon:''}
                                                            paint={product.paint?product.paint:''}
                                                            exterior={product.exterior?product.exterior:''}
                                                            type={product.type}
                                                            amount={product.amount}
                                                            price={product.price}
                                                            desc={product.exterior}
                                                            inspectLink={product.inspectGameLink}
                                                            promo={product.promo}
                                                            pricePromo={product.promo?product.pricePromo:null}
                                                            stickers={product.stickersinfo?product.stickersinfo:null}
                                                            paint={product.paint?product.paint:null}
                                                            price_real={product.price_real?product.price_real:null}
                                                        />
                                                    )
                                                })
                                            }
                                        </ContainerProducts>
                                    ):
                                    (
                                        <></>
                                    )
                                ):
                                (
                                    <ScaleLoader
                                        // css={override}
                                        color="#DC143C"
                                        height={60}
                                        width={7}
                                        margin={7}
                                        loading={true}
                                    />
                                )
                            }
                        </Content>
                        <ReactPaginate
                                initialPage={currentPage-1}
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
                        {
                            productSelect &&
                            (
                                <ModalInfoProduct infoProduct={productSelect} show={modal} handleClose={handleClose}/>
                            )
                        }
                    </Container>
    )
}