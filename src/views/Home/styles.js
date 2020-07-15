import styled from 'styled-components';

export const ImageFundo = styled.div`
`;

export const Content = styled.div`
    max-width: 100vw;
    max-height:100vh;
    height:100vh;
    background-color:#bbdb69;
    padding-top:165px;
    
    /* The image used */
    background-image: url(${({fundo})=> fundo?fundo:''});

    /* Set a specific height */
    min-height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BackgroundColor = styled.div`
    width:100%;
    height:auto;
    background-color: #05060D;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    position:relative;
    padding-bottom:200px;
`;



