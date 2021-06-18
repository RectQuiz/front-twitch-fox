import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index:7; /* Sit on top */
    /* padding-top: 100px;  */
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; 
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentCardInfo = styled.div`
    animation-name: example;
    animation-duration: 0.5s;
    /* width:100%; */
    max-width:800px;
    min-width:800px;
    
    max-height: 400px;
    min-height: 400px;
    /* max-width:25vw; */
    /* min-width:25vw; */
    background-color:#24252f;
    border-radius:7px;
    border: 3px solid #141414;
    align-self:center;
    padding:20px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 840px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        max-width:70%;
        min-width:70%;
        
        max-height: 90vh;
        min-height: 60vh;
    }
    
    @media (max-width: 500px) {
        max-width:95%;
        min-width:95%;
        
        max-height: 90vh;
        min-height: 90vh;
        padding:10px;
    }
    /* display: flex; */
    /* flex-direction: row; */
    
    @keyframes example {
        0%   {transform: scale(0.5);}
        25%  {transform: scale(1.3);}
        100% {transform: scale(1);}
    }
`;

export const ContentHeader = styled.div`
    width:70%;
    height: 100%;
    padding: 3px;
    /* background-color: ${colors.dourado}; */
    background-color:rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 840px) {
        width:100%;
        height: 50%;   
    }
`;

export const ContentImage = styled.div`
    /* min-width:50%; */
    /* max-width:50%; */
    /* height:100%; */
    width:100%;
    max-width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.4);
    padding:15px;
    border-radius:7px 7px 0px 0px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow: hidden;
    border-bottom: 2px solid #fff;
    position:relative;
    /* margin-bottom:5px; */
`;

export const ContainerStickers = styled.div`
    width: 100%;
    height: 25%;
    /* background-color: ${colors.white}; */
    display: flex;
    margin: 5px;
    flex-direction:row;
    justify-content:center;
    /* align-items:center; */
`;

export const ContentSticker = styled.div`
    margin: 10px;
    max-width: 60px;
    min-width: 60px;
    /* background-color: ${colors.red}; */
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
`;

export const ImageSticker = styled.img`
    max-width: 100%;
    max-height: 100%;
    /* background-color:red; */
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    /* background-color:red; */
`;

export const ContentInfoCard = styled.div`
    width:50%;
    height:100%;
    max-height: 100%;
    /* margin-top:5px; */
    /* background-color:red; */
    /* padding:15px; */
    border-radius:0px 0px 7px 7px;
    /* border-top: 2px solid #fff; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    overflow: auto;
    overflow-x:hidden;
    padding-left:10px;
    padding-right:5px;
    @media (max-width: 840px) {
        width:100%;
        height: 50%;  
        padding-left:0;
        padding-right:0; 
        margin-top: 10px;
    }
    /* position: relative; */
    /* border: 2px solid #fff; */
    ::-webkit-scrollbar {
        width: 9px;
        height: 9px;
    }
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment {
        display: block;
        height: 0;
        background-color: transparent;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: #141414;
        opacity: 0.1;
        -webkit-border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background-color: ${colors.dedtail3};
        -webkit-border-radius: 8px;
    }
`;

export const HeaderInfo = styled.div`
    width: 100%;
    padding: 15px;
    background-color:rgba(0,0,0,0.4);
    margin-bottom: 10px;
`;

export const TitleCard = styled.div`
    color:#fff;
    text-align:left;
    font-size: 24px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PaintCard = styled.div`
    color:#fff;
    text-align:left;
    font-size: 34px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DescCard = styled.h5`
    color:#fff;
    opacity:0.5;
    text-align:left;
`;

export const ActionCard = styled.button`
    /* width:20%; */
    padding:10px;
    background-color:yellow;
    border-radius:7px;
    /* margin-top:5px;
    margin-bottom:10px; */
    position: absolute;
    bottom:10px;
    right:10px;
    @media (max-width: 1000px) {
        display:none;
    }
`;

export const Amount = styled.h4`
    color:#fff;
`;

export const ButtonAction = styled.div`
    color:#000;
    font-size:15px;
    font-weight:bold;
    text-transform:uppercase;
`;

export const ContentPrice = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    /* padding-top:7px;
    padding-bottom:7px; */
    /* position: absolute; */
    /* bottom:10px; */
    /* left:10px; */
    /* bottom:50%; */
`;

export const ContentAction = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    position: fixed;
    bottom:51%;
`;

export const Price = styled.div`
    font-size:30px;
    color:orange;
    font-family:Raleway,sans-serif;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin: 0;
`;

export const PriceReal = styled.div`
    font-size:20px;
    color:${colors.white};
    font-family:Raleway,sans-serif;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin: 0;
`;

export const PriceOld = styled.h3`
    font-size:16px;
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

export const Desconto = styled.h3`
    font-size:20px;
    color:red;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding-left:7px;
    /* background-color:#fff; */
`;

export const ContentButtonAdd = styled.div`
    padding:10px;
    /* min-height:10%; */
    /* background-color:#000; */
    /* max-height:10%; */
    /* position:absolute;
    top:1; */
    align-self:center;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const ButtonAdd = styled.button`
    background-color:${({active})=>active?'#00a000':'#A4A4A4'};
    border-radius:7px;
    text-transform:uppercase;
    padding:10px;
`;

export const ContentConfirm = styled.div`
    max-height:100%;
    min-height:10vh;
    max-width: 30vw;
    height:auto;
    /* max-width:25vw; */
    /* min-width:25vw; */
    background-color:#24252f;
    border-radius:7px;
    border: 3px solid #141414;
    align-self:center;
    padding:10px;
    overflow: hidden;

    @media (max-width: 500px) {
        max-width:300px;
        flex-direction: row;
    }
    /* display: flex; */
    /* flex-direction: row; */
`;

export const TitleConfirm = styled.div`
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`;

export const ContentButtonConfirm = styled.div`
    width: 100%;
    /* background-color: ${colors.dourado_dark}; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding:15px;
`;

export const ButtonConfirm = styled.button`
    padding:10px;
    background-color: ${({color})=>color?color:colors.white};
    border-radius: 7px;
    min-width: 90px;
`;

export const PriceConfirm = styled.div`
    margin: 5px;
    color: ${colors.dourado_dark};
`;
