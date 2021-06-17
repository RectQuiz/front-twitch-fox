import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Content = styled.div`
    max-width: 100vw;
    max-height:100vh;
    height:100vh;
    /* padding-top:165px; */
    /* background-color: ${colors.blue}; */
    /* width:1000px; */
`;

export const BackgroundColor = styled.div`
    width:100%;
    min-height:100%;
    height:100%;
    background-color: ${colors.primary_dashboard};
    /* background-color: #0506; */
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    position:relative;
    padding-top:30px;
    padding-bottom:30px;
    padding-left:360px;
    padding-right:30px;
    @media (max-width: 1010px) {
        padding-left:0px !important;
        max-width: 100vw;
        padding: 0px;
    }
    /* opacity:0.3; */
`;

export const ContentBodyDash = styled.div`
    /* background-color:${colors.red}; */
    border-radius:30px;
    /* border: 4px solid #000; */
    /* flex:1; */
    height: 100%;
    padding: 20px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    /* color:#000;
    font-size:30px; */
    @media (max-width: 500px) {
        max-width: 100vw;
        padding: 0px;
    }
`;

export const ContentRowDashBoard = styled.div`
    /* background-color:${colors.red}; */
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:wrap;
`;

export const ContentColumDashBoard = styled.div`
    /* background-color:${colors.red}; */
    /* width: 100%; */
    display:flex;
    flex-direction:${(props)=>props.flex == 1?"row":"column"};
    justify-content:${(props)=>props.flex == 1?"space-between":"flex-start"};
    align-items:center;
    flex:${(props)=>props.flex?props.flex:1};
`;