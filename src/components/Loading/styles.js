import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index:7; /* Sit on top */
    /* padding-top: 100px;  */
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; 
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentCardInfo = styled.div`
    animation-name: example;
    animation-duration: 0.5s;
    height:auto;
    background-color:rgba(0,0,0,0.4);
    border-radius:50%;
    border: 3px solid ${colors.primary_geral};
    align-self:center;
    padding:50px;
    overflow: hidden;
    
    @media (max-width: 1000px) {
        /* min-width:50vw; */
    }
    
    @media (max-width: 500px) {
        max-width:300px;
    }

    @keyframes example {
        0%   {transform: scale(0.5);}
        25%  {transform: scale(1.3);}
        100% {transform: scale(1);}
    }
`;