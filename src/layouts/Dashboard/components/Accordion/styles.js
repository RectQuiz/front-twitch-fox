import styled from 'styled-components';
import { FaAngleDown, FaCircle } from 'react-icons/fa';
import colors from '../../../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
`;

export const ButtonItem = styled.button`
    width:100%;
    /* background-color:${colors.red}; */
    padding-top:10px;
    cursor: pointer;
    padding-bottom:10px;
    /* margin-bottom:25px; */
    border: 2px solid ${colors.secondary_dashboard};
    border-radius:10px;
    border-color:${(props)=>props.selected?colors.dedtail2:colors.secondary_dashboard};
    :active,.active{
        /* background-color: ${(props)=>props.active?'#ccc':'#eee'}; */
        box-shadow: 0px 0px 0px 0px #4F4F4F;
        /* border-color: ${colors.dedtail2}; */
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
    /* transition: background-color 0.6s ease; */
`;

export const ContentItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    /* background-color:${colors.blue}; */
    align-items:center;
    flex:1;
`;

export const LabelItem = styled.div`
    /* font-family: "Open Sans", sans-serif; */
    font-weight: 600;
    font-size: 18px;
    text-align: left;
`;

export const IconItem = styled(FaAngleDown)`
    margin-left: auto;
    transition: transform 0.6s ease;
`;

export const ContainerSubItens = styled.div`
    /* background-color: white; */
    overflow: hidden;
    transition: max-height 0.6s ease;
    background-color: ${colors.dedtail3};
    border-radius: 7px;
`;

export const ContentSubItens = styled.div`
    padding: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ContentSubItem = styled.button`
    /* background-color: turquoise; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    :active {
        box-shadow: 0px 0px 0px 0px #4F4F4F;
        /* border-color: ${colors.dedtail2}; */
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;

export const LabelSubItem = styled.div`
    color:${(props)=>props.selected?colors.primary_geral:colors.primary_dashboard} !important;
    font-size: 14px;
    text-transform: uppercase;
`;

export const IconItemMarc = styled(FaCircle)`
    margin-right: 10px;
`;