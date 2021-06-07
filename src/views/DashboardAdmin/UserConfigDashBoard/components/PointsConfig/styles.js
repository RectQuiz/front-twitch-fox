import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  /* background-color: ${colors.red_dark}; */
  width: 100%;
  padding: 20px;
`;

export const ContainerHeader = styled.div`
  background-color: ${colors.card_color};
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContentHeader = styled.div`
    color:${colors.white};
`;


export const ContainerBody = styled.div`
    /* width: 100%; */
    background-color: ${colors.card_color_ligth};
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ContainerLista = styled.div`
    /* width: 50px; */
    /* max-width: 100px; */
    /* background-color: ${colors.red}; */
    /* padding: 7px; */
    /* border-radius: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ContainerItem = styled.div`
    /* width: auto; */
    /* width: 50px; */
    /* max-width: 100px; */
    /* background-color: ${colors.red}; */
    /* padding: 7px; */
    /* border-radius: 10px; */
    /* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center; */
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const ContentItem = styled.button`
    width: 150px;
    /* width: 50px; */
    /* max-width: 50%; */
    background-color: ${colors.color_socket};
    padding: 7px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LabelItem = styled.div`
    color:${colors.white};
    margin-left: 5px;
    font-size: 15px;
`;

export const StatusLinked = styled.div`
    margin-left: 10px;
`;

export const ItemStatus = styled.div`
    width: 270px;
    background-color: ${({status})=>status?colors.green:colors.white};
    color: ${({status})=>status?colors.white:colors.black};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* padding: 5px; */
    padding-right: 10px;
    font-size: 12px;
    /* border: 3px solid ${colors.card_color}; */
`;