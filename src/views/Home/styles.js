import styled from 'styled-components';

export const ImageFundo = styled.div`
`;

export const Content = styled.div`
    width: 100vw;
    height:100vh;
    background-color:#bbdb69;
    
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



