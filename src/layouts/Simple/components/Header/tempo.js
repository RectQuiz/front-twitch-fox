import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1c1c1c;
  width: 100%;
  height: auto;
  max-height:100px;
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
    min-height:90px;
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
        transition: 0.2s all ease-out;
        &:hover{
            box-shadow:
                1px 1px #fff,
                2px 2px #fff,
                3px 3px #fff;
            -webkit-transform: translateX(-3px);
            transform: translateX(-3px);
        }
        /* border:1px solid #DC143C; */
        /* background-image:radial-gradient(circle, rgb(3, 18, 6) 0px, rgb(0, 0, 0) 94%, rgb(0, 0, 0) 100%);
        box-shadow:5px 10px 29px 0 rgba(42,45,54,.2); */
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
    min-height:90px;
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

export const ContainerNickname = styled.button`
    /* background-color:red; */
    width:100%;
    height:100%;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const ContentNickname = styled.button`
    /* background-color:black; */
    width:100%;
    height:100%;
    padding:5px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    color:#fff;
    font-size:18px;
    text-transform:uppercase;
    height:100%;
    font-weight:bold;
    position:relative;
`;

export const DropdownUser = styled.div`
    display:${({visible})=>visible?'flex':'none'};
    position:absolute;
    top:140px;
    background-color:#141414;
    width:150px;
    height:auto;
    border-radius:7px;
    border:2px solid rgba(55,56,71);
    overflow:hidden;
    flex-direction:column;
    z-index:999;
`;

export const ItemDropDown = styled.div`
    border-bottom: 2px solid rgba(55,56,71);
    text-align:center;
    padding:7px;
    /* border-radius:7px; */
`;

export const ButtonSair = styled.button`
    /* border-bottom: 2px solid rgba(55,56,71); */
    text-align:center;
    padding:7px;
    /* border-radius:7px; */
`;