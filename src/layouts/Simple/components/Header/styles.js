import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1c1c1c;
  width: 100%;
  height: auto;
  color: #fff;
  display: flex;
  /* padding: 0px 10px; */
  border-bottom: 4px solid #141414;
`;

export const Content = styled.header`
  
  max-width: 1150px;
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction:column;
  padding-left:10px;
  padding-right:10px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap:wrap;
/* background-color: #dd4; */
    a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        display:flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 990px) {
            padding:0;
            width:100%;
        }
    }
  
    a:hover{
            /* background-color: #ddd; */
            color: #DC143C;
            /* height:100%; */
            @media (max-width: 990px) {
                background-color: #ddd;
            color: #DC143C;
                height:100%;
            }
    }

    a:active{
        /* background-color: #4CAF50; */
        color: #4CAF50;
        /* height:100%; */
    }
`;

export const ImageLogo = styled.img`
    width:100%;
    max-width: 100px;
    height: auto;
    /* background-color:#fff; */
`;

export const ContainerLogo = styled.div`
    /* background-color:#fff; */
    padding:5px;
    max-height:90px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContainerButtonsNav = styled.nav`
    /* background-color:#fff; */
    padding:5px;
    max-height:90px;
    display:flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 990px) {
        display:none;
    }
    
`;

export const ButtonAuth = styled.button`
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        border-radius:7px;
        padding:0.7vw;
        background-color:#9147ff!important;
        @media (max-width: 990px) {
            width:100%;
            border-radius:0px;
            justify-content: center;
        }
        font-size:12px;
        font-weight:bold;
`;

export const ContainerButtonMenu = styled.button`
    height:50%;
    width:40px;
    display:none;
    /* background-color:#91db; */
    @media (max-width: 990px) {
        display:block;
    }
`;

export const TitleLogo = styled.h1`
    font-size:20px;
    @media (max-width: 280px) {
        /* color:#d32; */
        display:none;
    }
`;

export const ImageMenu = styled.img`
    width:100%;
    max-width: 30px;
    height: auto;
    /* background-color:#fff; */
`;

export const ContainerListMenu = styled.div`
    /* display:none; */
`;

export const ContentBig = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    /* background-color:#776; */
`;

export const ContentSmall = styled.div`
    display:none;
    /* background-color:#422; */
        flex-direction:column;
        align-items:center;
        justify-content:center;
    width:100%;
    @media (max-width: 990px) {
        display:${({ open }) => open ? 'flex' : 'none'};
    }
`;

export const Ul = styled.ul`
    list-style: none;
    /* display: none; */
    width:100%;
    flex-flow: column nowrap;
    li {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding: 18px 10px;
    }
    @media (max-width: 990px) {
        display:${({ open }) => open ? 'flex' : 'none'};
    }
`;