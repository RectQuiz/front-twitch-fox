import styled from 'styled-components';

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
    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentCardInfo = styled.div`
    animation-name: example;
    animation-duration: 0.5s;
    /* width:100%; */
    /* max-height:100%; */
    /* min-height:30vh; */
    height:auto;
    max-width:50%;
    /* max-width:25vw; */
    /* min-width:25vw; */
    background-color:#571819;
    border-radius:7px;
    border: 3px solid #240D0D;
    align-self:center;
    padding:10px;
    overflow: hidden;
    
    @media (max-width: 1000px) {
        /* min-width:50vw; */
    }
    
    @media (max-width: 500px) {
        max-width:300px;
    }

    /* position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    WebkitOverflowScrolling: touch;
    borderRadius: 4px;
    outline: none;
    padding: 20px; */
    @keyframes example {
        0%   {transform: scale(0.5);}
        25%  {transform: scale(1.3);}
        100% {transform: scale(1);}
    }
`;

export const ContentImage = styled.div`
    width:100%;
    background-color:rgba(194,29,32,0.4);
    padding:15px;
    border-radius:7px 7px 0px 0px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow: hidden;
    border-bottom: 2px solid red;
    position:relative;
    /* margin-bottom:5px; */
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    /* background-color:red; */
`;

export const ContentInfoCard = styled.div`
    width:100%;
    height:auto;
    /* margin-top:5px; */
    /* background-color:#141414; */
    /* padding:15px; */
    border-radius:0px 0px 7px 7px;
    border-top: 2px solid red;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    overflow: auto;
    overflow-x:hidden;
    padding:17px;
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
        background-color: #000;
        -webkit-border-radius: 8px;
    }
`;

export const TitleCard = styled.h4`
    color:#fff;
    text-align:center;
`;

export const ContentButtonAdd = styled.div`
    padding:10px;
    /* background-color:#000; */
    /* position:absolute;
    top:1; */
    width:100%;
    align-self:center;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const ButtonAdd = styled.button`
    background-color:#821618;
    border-radius:7px;
    text-transform:uppercase;
    padding:10px;
    width:50%;
`;