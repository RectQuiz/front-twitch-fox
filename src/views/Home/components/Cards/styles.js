import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  /* background-color: #05060D; */
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:flex-start;
  height:auto;
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  max-width: 1150px;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:space-between;
  padding-top:40px;
  padding-bottom:40px;
  border-width:1px;
  border-color:#bdbdbd;
  @media (max-width: 500px) {
    flex-direction:row;
    flex-wrap:wrap;
  }
`;

export const ContainerCard = styled.div`
    width:360px;
    height:250px;
    min-width:100px;
    /* background-color: #fff; */
    padding:15px;
    @media (max-width: 500px) {
      width:100%;
      max-width:100%;
    }
`;

export const Card = styled.div`
    width:100%;
    height:100%;
    border-width:1px;
    border:1.5px solid ${colors.color_jokerz_2};
    border-radius:12px;
    background-image:radial-gradient(circle, rgb(38, 0, 8) 2px, rgb(0, 0, 0) 94%, rgb(0, 0, 0) 100%);
    box-shadow:5px 10px 29px 0 rgba(42,45,54,.2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const IconCard = styled.img`
    width:100%;
    max-width: 100px;
    height: auto;
    /* background-color:#fff; */
`;

export const TitleCard = styled.h4`
    font-size:25px;
    color:#fff;
    font-family:Raleway,sans-serif;
    text-align:center;
    /* background-color:#fff; */
`;

export const DescCard = styled.p`
    font-size:19px;
    color:${colors.color_jokerz_1};
    font-family:Raleway,sans-serif;
    text-align:center;
    flex-wrap:wrap;
    margin-left:10px;
    margin-right:10px;
`;