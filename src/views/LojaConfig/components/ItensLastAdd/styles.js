import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  flex:${(props)=>props.flex?props.flex:1};
  background-color: ${colors.dedtail2};
  /* width: 100%; */
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  height:auto;
  /* padding-top:40px; */
  padding-bottom:40px;
  border-radius: 1vw;
  /* border: 3px solid ${colors.secondary_dashboard}; */
  padding: 20px;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  max-width: 1150px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
    flex-direction:row;
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