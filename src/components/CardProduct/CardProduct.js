import React from 'react';

import {
    ContainerCard,
    Card,
    ImageProduct,
    TitleCard,
    DescCard,
    ContentImage,

    Type,
    Amount,
    Price,
    ContentInfo,
    Desconto,
    ContentPrice,
    PriceOld
} from './styles';
import { GiPopcorn } from 'react-icons/gi';
const image_test = 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3ZTxS6eOlnI-Zg8j-JrXWmm5u4MBwnPCPpd703QPk_EdpYDr3cY6TJANtYguGqVm6xufp08PutcufyCMwu3Z2sGGdwULWjjgloA/330x192';
const CardProduct = (props) => {
    let {image,title,desc,type,amount,price,inspectGameLink,promo,pricePromo,handleSelect} = props;
    image = `https://steamcommunity-a.akamaihd.net/economy/image/${image}`;
    return (
        <ContainerCard>
            <Card promo={promo} onClick={()=>handleSelect(props)}>
                <ContentImage>
                    <ImageProduct
                        className='imageProduct'
                        src={image}
                    />
                </ContentImage>
                <ContentInfo promo={promo}>
                    {/* <Type>
                        {type}
                    </Type> */}
                    <TitleCard title={title}>
                        {title}
                    </TitleCard>
                    <DescCard title={desc}>
                        {desc}
                    </DescCard>
                    <Amount>
                        Estoque: {amount}
                    </Amount>
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
                </ContentInfo>
            </Card>
        </ContainerCard>
    )
}

export default CardProduct;