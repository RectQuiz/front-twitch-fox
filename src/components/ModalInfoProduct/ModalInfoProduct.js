import React, { useState } from 'react';

import {
    Container,
    
    ContentCardInfo,
    ContentHeader,
    ContentImage,
    ContainerStickers,
    ContentSticker,
    ImageSticker,
    Image,
    ContentInfoCard,
    HeaderInfo,
    PaintCard,

    TitleCard,
    DescCard,
    ActionCard,
    Amount,
    ButtonAction,
    ContentPrice,
    Price,
    PriceReal,
    Desconto,
    PriceOld,
    ContentAction,
    ContentButtonAdd,
    ButtonAdd,

    ContentConfirm,
    TitleConfirm,
    ContentButtonConfirm,
    ButtonConfirm,
    PriceConfirm
 } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { GiPopcorn } from 'react-icons/gi';
import { FaInfoCircle } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { MdSubtitles } from 'react-icons/md';
import { useHistory } from 'react-router';
import colors from '../../styles/colors';
import { redeemProductAction } from '../../store/modules/products/actions';
import { API_URL } from '../../services/config';

function ModalInfoProduct({
    show,
    infoProduct
}) {
    // let image = `https://steamcommunity-a.akamaihd.net/economy/image/${infoProduct.image}`;
    let image = infoProduct.image;
    const [ confirm, setConfirm ] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector(({ UserReducer }) => UserReducer);

    const dimisissModal = (e)=>{
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            dispatch(setStatusModal(false));
            setConfirm(false);
        }
    }

    const OpenActionLink = ()=>{
        window.location.assign(infoProduct.inspectLink);
    }
    
    const verificarPerfil = ()=>{
        history.push('user');
    }

    const resgatarProduto = ()=>{
        // console.log('infoProduct: ',infoProduct);
        dispatch(redeemProductAction({id_product:infoProduct.id}));
        dispatch(setStatusModal(false));
        setConfirm(false);
    }


    return (
            show && 
            (
                <Container className='fundo' onClick={dimisissModal}>
                    {
                        !confirm?
                        (
                            <ContentCardInfo>
                                <ContentHeader>
                                    <ContentImage>
                                        <Image
                                            src={image}
                                        />
                                        {
                                            (infoProduct.inspectLink.trim().length > 0) && 
                                            (
                                                <ActionCard>
                                                    <ButtonAction onClick={OpenActionLink}>
                                                        Inspecionar
                                                    </ButtonAction>
                                                </ActionCard>
                                            ) 
                                        }
                                    </ContentImage>
                                    {
                                        (infoProduct.stickers&& infoProduct.stickers.length > 0)&&
                                        (
                                            <ContainerStickers>
                                                {
                                                    infoProduct.stickers.map((sticker)=>{
                                                            return(
                                                                <ContentSticker title={sticker.name}>
                                                                    <ImageSticker
                                                                        src={sticker.link_img?sticker.link_img:sticker.path_img?`${API_URL}/${sticker.path_img}`:'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3136/image-not-found.jpg'}
                                                                    />
                                                                </ContentSticker>
                                                            )
                                                    })
                                                }
                                            </ContainerStickers>
                                        )
                                    }
                                </ContentHeader>
                                <ContentInfoCard>
                                    <HeaderInfo>
                                        <TitleCard title={infoProduct.title && (!infoProduct.weapon || infoProduct.weapon.length == 0 || !infoProduct.paint || infoProduct.paint.length == 0)?infoProduct.title:`${infoProduct.weapon?infoProduct.weapon:''} | ${infoProduct.paint?infoProduct.paint:''}`}>
                                            {infoProduct.title && (!infoProduct.weapon || infoProduct.weapon.length == 0 || !infoProduct.paint || infoProduct.paint.length == 0)?infoProduct.title:`${infoProduct.weapon?infoProduct.weapon:''} | ${infoProduct.paint?infoProduct.paint:''}`}
                                        </TitleCard>
                                        {
                                            infoProduct.desc.trim().length > 0 &&
                                            (
                                                <DescCard title={infoProduct.desc}>
                                                    <FaInfoCircle size={20}/> 
                                                    {`   `}
                                                    {infoProduct.desc}
                                                </DescCard>
                                            )
                                        }
                                        {
                                            infoProduct.floatvalue.trim().length > 0 && infoProduct.floatvalue != 'null' &&
                                            (
                                                <DescCard title={infoProduct.floatvalue}>
                                                    Float: {infoProduct.floatvalue}
                                                </DescCard>
                                            )
                                        }
                                        {/* <PaintCard>
                                            {infoProduct.paint?infoProduct.paint:""}
                                        </PaintCard> */}
                                    </HeaderInfo>

                                    <Amount title={infoProduct.amount}>
                                        <FiShoppingBag/>  Estoque: {infoProduct.amount}
                                    </Amount>
                                    {/* <ContentPrice>
                                        <PriceReal>
                                            {`R$${infoProduct.price_real?infoProduct.price_real.toFixed(2).replace('.',','):'00.00'}`}
                                        </PriceReal>
                                    </ContentPrice> */}
                                    <ContentPrice>
                                        {
                                            infoProduct.promo && (
                                                <PriceOld>
                                                    {infoProduct.price}
                                                </PriceOld>
                                            )
                                        }
                                        <Price title={infoProduct.promo?infoProduct.pricePromo:infoProduct.price}>
                                            Valor: {infoProduct.promo?infoProduct.pricePromo:infoProduct.price}  <GiPopcorn/> 
                                        </Price>
                                        <Desconto title={infoProduct.pricePromo?'-'+Math.round((infoProduct.price - infoProduct.pricePromo*100)/infoProduct.price)+'%':''}>
                                            {
                                            infoProduct.pricePromo?'-'+Math.round((infoProduct.price - infoProduct.pricePromo)*100/infoProduct.price)+'%':''
                                            }
                                        </Desconto>
                                    </ContentPrice>
                                    <ContentButtonAdd>
                                        {
                                            user?
                                            (
                                                
                                                user.type_account === 'pendente'?
                                                (
                                                    <ButtonAdd onClick={verificarPerfil} active={false} >
                                                        Atualize seu perfil
                                                    </ButtonAdd>
                                                ):
                                                (
                                                    user.type_account === 'secondary'?
                                                    (
                                                        <ButtonAdd disabled active={false} >
                                                            Apenas para contas primárias
                                                        </ButtonAdd>
                                                    ):
                                                    (
                                                        (infoProduct.promo && user.points>=infoProduct.pricePromo || !infoProduct.promo && user.points>=infoProduct.price)?
                                                        (
                                                            <ButtonAdd onClick={()=>setConfirm(true)} active={true}>
                                                                Resgatar item
                                                            </ButtonAdd>
                                                        ):
                                                        (
                                                            <ButtonAdd disabled active={false}>
                                                                Pontos insuficientes
                                                            </ButtonAdd>
                                                        )
                                                    )
                                                )
                                            ):
                                            (
                                                <ButtonAdd disabled active={false} >
                                                    Faça login antes
                                                </ButtonAdd>
                                            )
                                        }
                                    </ContentButtonAdd>
                                </ContentInfoCard>
                            </ContentCardInfo>
                        ):
                        (
                            <ContentConfirm>
                                <TitleConfirm>
                                    {`Deseja realmente adiquirir este item por`}
                                    <PriceConfirm>
                                    {`${infoProduct.price?infoProduct.promo?infoProduct.pricePromo:infoProduct.price:0} pipocas?`}
                                    </PriceConfirm>
                                </TitleConfirm>
                                <ContentButtonConfirm>
                                    <ButtonConfirm onClick={resgatarProduto} color={colors.green_dark}>
                                        Sim
                                    </ButtonConfirm>
                                    <ButtonConfirm onClick={()=>setConfirm(false)} color={colors.red_dark}>
                                        Não
                                    </ButtonConfirm>
                                </ContentButtonConfirm>
                            </ContentConfirm>
                        )
                    }

                </Container>
            )
    );
}

export default ModalInfoProduct;