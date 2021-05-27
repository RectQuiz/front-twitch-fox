import styled from 'styled-components';
import colors from '../../styles/colors';

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

export const Card = styled.div`
    width:100%;
    height:100%;
    border-width:1px;
    ${({tradable})=>!tradable&&`
        border:3px solid ${colors.red_dark};
    `}
    border-radius:12px;
    background-color:${({promo})=>promo?'rgba(145,118,0,0.4)':'#24252f'};
    box-shadow:5px 10px 29px 0 rgba(42,45,54,.2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:10px;
    cursor: auto !important;
    ${(props)=>!props.dash?`
    cursor: pointer !important;
    :hover{
        background-color:${({promo})=>promo?'rgba(171,154,77,0.4)':'rgba(55,56,71)'};
        .imageProduct{
            transform:scale(1.05);
            filter: brightness(200%);
        }
    }
    :active {
        transform: translateY(4px);
    }`:''}
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
    position:relative;
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
    color:${colors.red_dark};
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding-left:7px;
    /* background-color:#fff; */
`;

export const ContainerStatus = styled.div`
    /* width:20%; */
    /* padding:5px; */
    background-color:${colors.white};
    padding: 3px;
    border-radius:7px;
    /* margin-top:5px;
    margin-bottom:10px; */
    position: absolute;
    top:10px;
    left:10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    @media (max-width: 500px) {
        display:none;
    }
`;

export const Status = styled.div`
    background-color: ${({status})=>{
        switch (status) {
            case 'cadastrado':
                return colors.status_product_1
                break;
            case 'emEstoque':
                return colors.status_product_2
                break;
            case 'esgotado':
                return colors.status_product_3
                break;
        
            default:
                return colors.white
                break;
        }
    }};
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

export const ActionCard = styled.div`
    /* width:20%; */
    padding:5px;
    background-color:yellow;
    border-radius:7px;
    /* margin-top:5px;
    margin-bottom:10px; */
    position: absolute;
    top:10px;
    right:10px;
    cursor: pointer;
    @media (max-width: 500px) {
        display:none;
    }
`;

export const ButtonAction = styled.div`
    color:#000;
    font-size:12px;
    font-weight:bold;
    text-transform:uppercase;
`;

export const ContainerFloat = styled.div`
    /* width:20%; */
    /* padding:5px; */
    /* background-color:yellow; */
    border-radius:7px;
    /* margin-top:5px;
    margin-bottom:10px; */
    position: absolute;
    bottom:10px;
    left:10px;
    @media (max-width: 500px) {
        display:none;
    }
`;

export const ContentFloat = styled.div`
    color:${colors.white};
    font-size:10px;
    font-weight:bold;
    text-transform:uppercase;
`;

export const ContentconfigButtons = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: white; */
    width: 100%;
    justify-content: space-around;
    padding: 5px;
    border: 2px solid ${colors.primary_dashboard};
    border-radius: 7px;
`;

export const EditButton = styled.button`
    /* background-color: ${colors.white};
    padding: 5px;
    border-radius: 50%; */
    :hover{
        transform:scale(1.02);
        filter: brightness(120%);
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

export const DeleteButton = styled.button`
    /* background-color: ${colors.white};
    padding: 5px;
    border-radius: 50%; */
    :hover{
        transform:scale(1.02);
        filter: brightness(120%);
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

export const ActiveButton = styled.button`
    /* background-color: ${colors.white};
    padding: 5px;
    border-radius: 50%; */
    ${({active})=>{
        return active?`
            :hover{
                transform:scale(1.02);
                filter: brightness(120%);
            }
            :active {
                transform: translateY(4px);
            }
            :focus {
                border: none;
                outline:none;
                outline-style: none;
            }
        `:`
            opacity:0.2;
            cursor:auto;
        `
    }}
`;