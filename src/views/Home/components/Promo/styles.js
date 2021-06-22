import styled from 'styled-components';
import colors from '../../../../styles/colors';

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
  flex-direction:row;
  align-items: center;
  justify-content:flex-start;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
    flex-direction:row;
    flex-wrap:wrap;
  /* } */
`;

export const Products = styled.div`
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
  background-color:${colors.color_jokerz_2};
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
    /* transform: translateY(-15px); */
  }
`;