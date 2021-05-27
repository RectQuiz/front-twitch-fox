import React from 'react';

import {
    ContainerCard,
    Card,
    ImageProduct,
    TitleCard,
    DescCard,
    ContentImage,

    Amount,
    Price,
    ContentInfo,
    Desconto,
    ContentPrice,
    PriceOld,
    ActionCard,
    ButtonAction,

    ContainerFloat,
    ContentFloat,

    ContentconfigButtons,
    EditButton,
    DeleteButton,
    ActiveButton,
    
    ContainerStatus,
    Status
} from './styles';
import { GiPopcorn } from 'react-icons/gi';
import { FaRegEdit, FaTrash, FaExchangeAlt } from "react-icons/fa";
import colors from '../../styles/colors';
// const image_test = 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3ZTxS6eOlnI-Zg8j-JrXWmm5u4MBwnPCPpd703QPk_EdpYDr3cY6TJANtYguGqVm6xufp08PutcufyCMwu3Z2sGGdwULWjjgloA/330x192';
const CardProduct = (props) => {
    let {
        id,
        tradable,
        image,
        title,
        desc,
        type,
        amount,
        price,
        inspectGameLink,
        promo,
        pricePromo,
        handleSelect,
        inspectLink,
        floatvalue,
        dash,
        editProduct = ()=>{},
        deleteProduct = ()=>{},
        changeStatusProduct = ()=>{},
        status
    } = props;
    // image = `https://steamcommunity-a.akamaihd.net/economy/image/${image}`;
    const OpenActionLink = (inspectLink)=>{
        window.location.assign(inspectLink);
    }
    return (
        <ContainerCard>
            <Card tradable={tradable || !dash} dash={dash} promo={promo} onClick={()=>!dash?handleSelect(props):()=>{}}>
                <ContentImage>
                    <ImageProduct
                        className='imageProduct'
                        src={image}
                    />
                    {
                        dash&& 
                        (
                            <ContainerStatus>
                                <Status status={status}>
                                    {/* {status} */}
                                </Status>
                            </ContainerStatus>
                        ) 
                    }
                    {
                        (floatvalue && floatvalue != "0") && 
                        (
                            <ContainerFloat>
                                <ContentFloat>
                                    {floatvalue}
                                </ContentFloat>
                            </ContainerFloat>
                        ) 
                    }
                    {
                        dash && (inspectLink.trim().length > 0) && 
                        (
                            <ActionCard>
                                <ButtonAction onClick={()=>OpenActionLink(inspectLink)}>
                                    Inspecionar
                                </ButtonAction>
                            </ActionCard>
                        ) 
                    }
                </ContentImage>
                <ContentInfo promo={promo}>
                    {/* <Type>
                        {type}
                    </Type> */}
                    {
                        title&&
                        (
                            <TitleCard title={title}>
                                {title}
                            </TitleCard>
                        )
                    }
                    {
                        desc&&
                        (
                            <DescCard title={desc}>
                                {desc}
                            </DescCard>
                        )
                    }
                    {
                        amount&&
                        (
                            <Amount>
                                Estoque: {amount}
                            </Amount>
                        )
                    }
                    <ContentPrice>
                        {
                            promo && (
                                <PriceOld>
                                    {price}
                                </PriceOld>
                            )
                        }
                        <Price>
                            {promo?((price - pricePromo)*100)/price:price}  <GiPopcorn/> 
                        </Price>
                        <Desconto>
                            {pricePromo?'-'+pricePromo+'%':''}
                        </Desconto>
                    </ContentPrice>
                    {
                        dash&&
                        (
                            <ContentconfigButtons>
                                <EditButton onClick={editProduct}>
                                    <FaRegEdit size={20} color={colors.yellow} />
                                </EditButton>
                                <DeleteButton onClick={()=>deleteProduct(id)}>
                                    <FaTrash size={20} color={colors.red_dark} />
                                </DeleteButton>
                                {
                                    (
                                        <ActiveButton
                                            active={tradable?true:(status != "esgotado" && status != "cadastrado") }
                                            disabled={!tradable?(status == "esgotado" || status == "cadastrado"):false}
                                            onClick={()=>changeStatusProduct(status == "emEstoque"?"esgotado":(status == "cadastrado"?"emEstoque":(status == "esgotado"?"emEstoque":"cadastrado")),id)}>
                                            <FaExchangeAlt size={20} color={status == "emEstoque"?colors.red_dark:colors.green} />
                                        </ActiveButton>
                                    )
                                }
                            </ContentconfigButtons>
                        )
                    }
                </ContentInfo>
            </Card>
        </ContainerCard>
    )
}

export default CardProduct;