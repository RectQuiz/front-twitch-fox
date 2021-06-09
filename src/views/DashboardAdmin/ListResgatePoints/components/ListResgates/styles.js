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
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  border-radius: 14px;
  /* max-width: 1150px; */
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content:center;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
    flex-direction:row;
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
  border-radius: 14px;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  flex-wrap:wrap;
`;

export const ContentRedeem = styled.div`
  width: 100%;
  background-color: ${colors.dedtail3};
  width: 100%;
  padding: 10px;
  border-radius: 14px;
  margin: 5px;
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

export const Nickname = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: bold;
  color: ${colors.dourado_dark};
`;

export const Pipocas = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: bold;
  color: ${colors.dourado_dark};
`;

export const DataRetirada = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: bold;
  color: ${colors.dourado_dark};
`;

export const Canal = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: bold;
  color: ${colors.dourado_dark};
`;