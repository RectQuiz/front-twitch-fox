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
    /* opacity:0.3; */
`;

export const ContentBodyDash = styled.div`
    /* background-color:${colors.red}; */
    border-radius:30px;
    /* border: 4px solid #000; */
    flex:1;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    /* color:#000;
    font-size:30px; */
`;
