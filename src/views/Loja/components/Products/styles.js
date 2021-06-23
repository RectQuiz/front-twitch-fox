import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-between;
  /* padding-top:40px; */
  padding-bottom:40px;
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  max-width: 1150px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:flex-start;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
    flex-wrap:wrap;
  padding-bottom:40px;
  flex:1;
  /* } */
`;

export const ContainerProducts = styled.div`
  /* background-color: green; */
  width: 100%;
  max-width: 1150px;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  flex-wrap:wrap;
`;

export const ButtonStore = styled.button`
  margin-top:40px;
  margin-bottom:20px;
  /* width:5vw; */
  padding:10px;
  /* height:70px; */
  background-color:rgba(218,0,57);
  border-radius:5px;
  text-transform:uppercase;
  font-size:20px;
  font-weight:bold;
  text-align:center;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  transition: 0.2s all ease-out;
  :hover{
    /* background-color:rgba(232,0,115); */
    opacity:0.6;
    transform: translateY(-15px);
  }
`;

export const ContentInfoPoints = styled.div`
  /* width:100%; */
  /* background-color:green; */
  /* padding:15px; */
  border:1px solid rgba(76,76,84);
  border-radius:7px;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-left:15px;
  margin-right:15px;
  margin-bottom:20px;
`;

export const PointsLabel = styled.div`
    padding:10px;
    background-color:rgba(76,76,84);
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    border:1px solid rgba(41,41,46);
    color:#fff;
`;

export const PointsValue = styled.div`
    padding-left:15px;
    padding-right:15px;
    color:orange;
`;

export const ContainerFiltros = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerItemTypeFiltro = styled.div`
  border-top-right-radius: 5px;
  flex-wrap:nowrap;
  overflow: auto;
  width: 100%;
  background-color: ${colors.color_jokerz_6};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding-left: 40px;
  padding-right: 40px;
  :before {
      /* border-style: solid;
      border-width: 20px 20px 0 20px;
      border-color: transparent transparent transparent ${colors.color_jokerz_6};
      content:"";
      height: 0;
      left: 50%; */
      /* margin-left: -20px; */
      /* position: absolute;
      top: -15px;
      left: 165px;
      z-index: 6;
      width: 0; */
  }
  :after {
      /* border-style: solid;
      border-width: 20px 20px 0 20px;
      border-color: ${colors.color_jokerz_6};
      border-top-left-radius: 5px;
      content:"";
      height: 15px; */
      /* margin-left: -20px; */
      /* position: absolute;
      top: -15px;
      left: 15px;
      z-index: 2;
      width: 150px; */
  }
`;

export const ContentItemType = styled.button`
  color: ${colors.color_jokerz_1};
  font-size: 14px;
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelFiltro = styled.div`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
`;

export const ContentImageFiltro = styled.div`
    /* background-color: #aaa; */
    /* border-radius: 50%; */
    width: 50px;
    height: 60px;
    overflow: hidden;
    /* position: relative; */
    /* border:3px solid  ${colors.color_jokerz_2}; */
    /* margin-bottom: 15px; */
`;

export const LogoFiltro = styled.img`
    /* position: absolute;
    bottom: 0; */
    width: 100%;
`;

export const DividerFiltros = styled.div`
    /* position: absolute;
    bottom: 0; */
    width: 100%;
    border-bottom: 1px solid ${colors.white};
`;

export const ContainerFiltroSecond = styled.div`
    /* position: absolute;
    bottom: 0; */
    background-color: ${colors.color_jokerz_6};
    width: 100%;
    padding:15px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const ContinueLeft = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 7;
  width: 50px;
  height: 100%;
  background-image: linear-gradient(to right, ${colors.dedtail1}, ${colors.transparent2});
`;

export const ContinueRight = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  width: 50px;
  height: 100%;
  background-image: linear-gradient(to right,${colors.transparent2}, ${colors.dedtail1});
`;