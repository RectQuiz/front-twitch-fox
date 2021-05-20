import styled from 'styled-components';

const sizeCardH = 400;
const sizeCardW = 287.5;

export const ContainerCard = styled.div`
    width:${sizeCardW}px;
    height:${sizeCardH}px;
    min-width:100px;
    /* background-color: #fff; */
    padding:15px;
    @media (max-width: 500px) {
        width:100%;
        height:${sizeCardH}px;
    }:focus {
            border: none;
            outline:none;
            outline-style: none;
        }
`;

export const Card = styled.button`
    width:100%;
    height:100%;
    border-width:1px;
    /* border:1px solid #DC143C; */
    border-radius:12px;
    background-color:${({promo})=>promo?'rgba(145,118,0,0.4)':'#24252f'};
    box-shadow:5px 10px 29px 0 rgba(42,45,54,.2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:10px;
    :hover{
        background-color:${({promo})=>promo?'rgba(171,154,77,0.4)':'rgba(55,56,71)'};
        .imageProduct{
            transform:scale(1.05);
            filter: brightness(200%);
        }
    }
    :active {
        transform: translateY(4px);
    }
    :focus {
        border: none;
        outline:none;
        outline-style: none;
    }
`;

export const ImageProduct = styled.img`
    max-width: 100%;
    max-height: 100%;
    /* background-color:#fff; */
    transition: 0.2s all ease-out;
    /* @media (max-width: 500px) {
        max-width:60vw;
    } */
`;

export const ContentImage = styled.div`
    background-color:rgba(0,0,0,0.4);
    border-radius:12px;
    border-bottom: 2px solid #fff;
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
    padding:15px;
    width:100%;
    height:100%;
    min-height:${(sizeCardH/2)-10}px;
    max-height:${(sizeCardH/2)-10}px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const Type = styled.p`
    font-size:13px;
    color:#fff7;
    font-family:Raleway,sans-serif;
    text-align:left;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* background-color:#fff; */
`;

export const TitleCard = styled.h4`
    font-size:19px;
    /* max-height:27px; */
    color:#fff;
    font-family:Raleway,sans-serif;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    /* background-color:#fff; */
`;

export const DescCard = styled.h2`
    font-size:13px;
    /* max-height:27px; */
    color:#fff;
    font-family:Raleway,sans-serif;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    /* background-color:#fff; */
`;

export const Amount = styled.h5`
    font-size:15px;
    color:#fff7;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    /* background-color:#fff; */
`;

export const PriceOld = styled.h5`
    font-size:15px;
    text-decoration:line-through;
    color:#fff7;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    /* padding-left:7px; */
    padding-right:7px;
    /* background-color:#fff; */
`;

export const Desconto = styled.h5`
    font-size:19px;
    color:red;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding-left:7px;
    /* background-color:#fff; */
`;


export const Price = styled.h5`
    font-size:19px;
    color:orange;
    font-family:Raleway,sans-serif;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    /* background-color:#fff; */
`;

export const ContentInfo = styled.div`
    /* flex:5; */
    /* background-color:#fbbf; */
    height:100%;
    max-height:${(sizeCardH/2)-40}px;
    min-height:${(sizeCardH/2)-40}px;
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:5px;
    padding-right:5px;
    overflow: hidden;
    white-space:nowrap;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

export const ContentPrice = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

// export const ContentImage = styled.div`
//     background-color:rgba(0,0,0,0.4);
//     border-radius:12px;
//     border-bottom: 2px solid #fff;
//     border-bottom-left-radius:0px;
//     border-bottom-right-radius:0px;
//     padding:15px;
//     width:100%;
//     height:100%;
//     min-height:${(sizeCardH/2)}px;
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//     justify-content:center;
//     flex:5;
// `;