import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  flex:${(props)=>props.flex?props.flex:1};
  background-color: ${colors.dedtail2};
  /* width: 100%; */
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:flex-start;
  height:auto;
  min-height: 78vh;
  /* padding-top:40px; */
  padding-bottom:40px;
  border-radius: 14px;
  /* border: 3px solid ${colors.secondary_dashboard}; */
  /* padding: 20px; */
  margin-bottom: 15px;
  padding: 5px;
    @media (max-width: 500px) {
        max-width: 100vw;
        padding: 0px;
    }
`;

export const Content = styled.div`
  /* background-color: #ee3; */
  width: 100%;
  border-radius: 14px;
  /* max-width: 1150px; */
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
  flex-wrap:wrap;
  padding-bottom:40px;
  flex:1;
    @media (max-width: 500px) {
        max-width: 100vw;
        padding: 0px;
    }
  /* } */
`;

export const ContainerResgates = styled.div`
  /* background-color: green; */
  width: 100%;
  display: flex;
  /* border-radius: 14px; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  flex-wrap:wrap;
  padding: 7px;
  padding-top: 0;
  
  @media (max-width: 500px) {
        padding: 0px;
    }
`;

export const ContentRedeem = styled.div`
  width: 100%;
  background-color: ${colors.dedtail3};
  /* border: 2px solid ${colors.black}; */
  /* padding: 10px; */
  /* border-radius: 14px; */
  border-top-width: 0;
  border-bottom-width: 0;
  /* border-bottom-color: ${colors.white}; */
  /* margin: 5px; */
  color:${colors.white};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ContentItemList = styled.div`
/* padding: 7px; */
/* background-color: ${colors.primary_dashboard}; */
width: 20%;
height: 40px;
text-align: center;
border:2px solid ${colors.black};
border-top-width: 0;
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;
/* width: 100%; */
padding: 5px;
display: block;
${
  ({left,right})=>
    left || right?
    ``
    :
    `border-right-width: 0;`
}
${
  ({left})=>
    left?
    `border-right-width: 0;`
    :
    ``
}
${
  ({right})=>
    right?
    ``
    :
    ``
}
  @media (max-width: 500px) {
      display: ${({important})=>important?'block':'none'};
      width: 100%;
      padding: 0;
      margin: 0 auto;
  }
`;

export const HeaderList = styled.div`
  width: 100%;
  /* background-color: ${colors.color_twitch}; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px;
  padding-bottom: 0;
    @media (max-width: 500px) {
        padding: 0px;
    }
`;

export const ContentHeader = styled.div`
  padding: 7px;
  background-color: ${colors.primary_dashboard};
  text-align: center;
  border:2px solid ${colors.black};
  width: 25%;
  height: 40px;
  margin: 0;
  ${
    ({left,right})=>
      left || right?
      ``
      :
      `border-right-width: 0px;`
  }
  ${
    ({left})=>
      left?
      `border-top-left-radius: 10px;
       border-right-width: 0;`
      :
      ``
  }
  ${
    ({right})=>
      right?
      `border-top-right-radius: 10px;`
      :
      ``
  }
    @media (max-width: 500px) {
        display: ${({important})=>important?'block':'none'};
        width: 100%;
    }
`;

export const ContentItemAcoes = styled.div`
  /* padding: 7px; */
  /* background-color: ${colors.primary_dashboard}; */
  width: 20%;
  height: 40px;
  text-align: center;
  border:2px solid ${colors.black};
  border-top-width: 0;
  white-space:nowrap;
  overflow: hidden;
  /* width: 100%; */
  padding: 5px;
  ${
    ({left,right})=>
      left || right?
      ``
      :
      `border-right-width: 0;`
  }
  ${
    ({left})=>
      left?
      `border-right-width: 0;`
      :
      ``
  }
  ${
    ({right})=>
      right?
      ``
      :
      ``
  }
    @media (max-width: 500px) {
        display: ${({important})=>important?'block':'none'};
        width: 100%;
        overflow-x: auto;
        padding: 0;
        margin: 0;
    }
    @media (max-width: 1200px) {
        /* display: ${({important})=>important?'flex':'none'}; */
        display: block;
        overflow-x: auto;
        padding: 0;
        margin: 0;
    }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContentAcao = styled.button`
  padding: 5px;
  background-color: ${({color})=>color?color:colors.white};
  border-radius:5px;
  margin: 2px;
`;