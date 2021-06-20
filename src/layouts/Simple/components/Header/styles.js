import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1c1c1c;
  width: 100%;
  height: auto;
  color: #fff;
  display: flex;
  /* max-height:95px; */
  min-height:95px;
  /* padding: 0px 10px; */
  border-bottom: 4px solid #141414;
  /* position:absolute;
  top:70px; */
  /* opacity:0.5; */
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
    .item{
        color: #DC143C;
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
            /* border-radius:0px; */
            padding:7px;
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
    @font-face {
    font-family: 'Gotham';
    src: url('fonts/Gotham-Bold.eot'); /* IE9 Compat Modes */
    src: url('fonts/Gotham-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/Gotham-Bold.woff') format('woff'), /* Modern Browsers */
        url('fonts/Gotham-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/Gotham-Bold.svg#svgFontName') format('svg'); /* Legacy iOS */
    font-weight: 700;
    font-style: normal;
    }
    font-size:30px;
    font-family: 'Gotham';
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

export const ContainerNickname = styled.div`
    /* background-color:#fff; */
    width:100%;
    /* height:auto; */
    padding:5px;
    /* display:flex; */
    display: inline-block;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    :hover .dropDownNicname {
        display: flex;
    }
`;

export const ContentNickname = styled.div`
    /* background-color:black; */
    width:100%;
    /* max-width:150px; */
    /* height:100%; */
    /* padding:10px; */
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
`;

export const Nickname = styled.div`
    /* background-color:white; */
    cursor:pointer;
    text-transform:uppercase;
    text-overflow: ellipsis;
    font-weight:bold;
    white-space:nowrap;
    overflow: hidden;
    text-align:center;
    color:#DC143C;
    font-size:16px;
    ::after{
        display: inline-block;
        margin-left: .255em;
        vertical-align: .255em;
        content: "";
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;
    }
`;

export const ContainerDropDown = styled.div`
    display: none;
    position: absolute;
    background-color: #1c1c1c;
    border-radius:7px;
    border: 4px solid #141414;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    color: black;
    cursor:pointer;
    text-align:center;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`;

export const ItemDropDown = styled.div`
    color: white !important;
    /* padding: 12px 16px; */
    text-decoration: none;
    display: flex;
    text-align:center;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    border-bottom:1px solid #141414;
    width:90%;
    :hover{
        color: #DC143C !important;
        font-weight:bold;
    }
`;

export const ContainerDropDownMobile = styled.div`
    display: ${({status})=>status?'flex':'none'};
    margin-top:10px;
    /* position: absolute; */
    background-color: #1c1c1c;
    border-radius:7px;
    border: 4px solid #141414;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    /* z-index: 1; */
    color: black;
    cursor:pointer;
    text-align:center;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ItemDropDownMobile = styled.div`
    width:90%;
    color: white !important;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-transform:uppercase;
    border-bottom:1px solid #141414;
    :hover{
        color: #DC143C !important;
        font-weight:bold;
    }
`;