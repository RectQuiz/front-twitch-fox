import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    /* background-color:red; */
    padding-right:25px;
    padding-left:25px;
    padding-bottom:50px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    padding-right:750px;
`;

export const Content = styled.div`
    width:100%;
    /* background-color:green; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    padding-right:150px;
`;

export const ContainerAjudas = styled.div`
    width:65%;
    /* background-color:blue; */
    padding:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
`;

export const ContentAjuda = styled.button`
    height: 7vw;
    width: 7vw;
    min-width:50px;
    min-height:50px;
    border: 2px solid #fff;
    border-radius: 5px;
    overflow: hidden;
    /* margin-right:30px; */
    background-color:${(props)=>props.random?"#2E8B57":(props.selected?"#2E8B57":"#141414")};
    box-shadow: 1px 1px 15px -5px black;
    transition: all .3s ease;
    padding:0.3vw;
    opacity:${(props)=>props.status?0.1:1};
    filter:${(props)=>props.status?'brightness(100%)':'brightness(130%)'};
    /* cursor: pointer; */
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;

export const AjudaImg = styled.img`
    object-fit: contain;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    /* background-color:#141414; */
    /* border: 2px solid #141414; */
    transition: all .3s ease;
`;

export const ContainerBotoes = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    /* background-color:red; */
    width:100%;
`;

export const ContentBotoes = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    /* background-color:yellow; */
    width:65%;
`;

export const ContentBotao = styled.button`
    padding:10px;
    border:2px solid #fff;
    border-radius:10px;
    margin-top:15px;
    background-color:#fff;
    color:#000;
    font-weight:bold;
`;


export const ContentBotaoRandom = styled.button`
    padding:10px;
    border:2px solid #fff;
    border-radius:10px;
    margin-top:15px;
    /* background-color:#fff; */
    color:#000;
`;