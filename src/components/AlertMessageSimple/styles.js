import styled from 'styled-components';
import colors from '../../styles/colors';
import { FaTimesCircle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  position: fixed;
  top: ${({layout})=>layout == 'simple'?'176px':layout == 'dashboard'?'20px':'176px'};
  right: 0;
  /* padding: 10px; */
  z-index: 8;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    /* background-color: ${colors.blue}; */
`;

export const ContainerAlert = styled.div`
    width: 100%;
    background-color: ${({color})=>color?color:colors.white};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
    margin-right: 0;
`;

export const ContentIconAlert = styled.div`
    /* background-color: ${colors.red_dark}; */
    padding: 15px;
    /* padding-right: 20px; */
`;

export const IconError = styled(FaTimesCircle)`
`;

export const IconAlert = styled(FaInfoCircle)`
`;

export const IconSuccess = styled(FaCheckCircle)`
`;

export const ContentTextAlert = styled.div`
    width: 100%;
    /* background-color: ${colors.red_dark}; */
    min-width: 200px;
    color: ${({color})=>color?color:colors.white};
    padding: 15px;
`;