import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  height:auto;
  padding-top:40px;
  padding-bottom:40px;
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