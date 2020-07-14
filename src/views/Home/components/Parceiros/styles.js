import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    /* background-color:#000; */
    /* padding:50px; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* margin-top:-50px; */
`;

export const Content = styled.div`
    max-width: 1150px;
    width: 100%;
    /* background-color:#1c1c1c; */
    padding:50px;
    display:flex;
    flex:1;
    border-radius:16px;
    border:2px solid rgba(218,0,57);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (max-width: 500px) {
        border-radius:0px;
    }
`;

export const TitleParceiros = styled.h2`
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    text-align:center;
`;

export const NameParceiro = styled.h4`
    color:#fff;
    text-transform:uppercase;
    /* font-weight:bold; */
    padding:10px;
`;

export const DescParceiros = styled.h4`
    color:#fff;
    text-align:center;
    /* text-transform:uppercase; */
    /* font-weight:bold; */
`;

export const ContainerLogoParceiros = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* background-color:#fff; */
    padding:50px;
    flex-wrap:wrap;
    @media (max-width: 500px) {
        flex-direction:column;
    }
`;

export const ContainerLogoParceiro = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentLogoParceiro = styled.div`
    background-color: #aaa;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    /* position: relative; */
    border:3px solid  rgba(218,0,57);
`;

export const LogoParceiro = styled.img`
    /* position: absolute;
    bottom: 0; */
    width: 100%;
`;