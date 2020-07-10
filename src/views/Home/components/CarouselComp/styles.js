import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:flex-start;
  height:auto;
  background-color: transparent; 
  background-image: radial-gradient(transparent, black);
`;

export const Content = styled.div`
  /* padding-top: 50px; */
  width: 100vw;
  /* margin-top:1px; */
  /* max-width: 1200px; */
  /* max-height:50vh; */
  height:50vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  background-color:#000;
  /* background-color:red; */
  opacity:0.8;
`;

export const ContentSlide = styled.div`
    height:50vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  background-color:transparent;
`;

export const TitleSlide = styled.h2`
    /* background-color:#fff; */
    color:white;
    text-transform:uppercase;
    font:33px sans-serif;
    text-align:center;
    font-weight:bold;
`;

export const SubTitleSlide = styled.p`
    /* background-color:#fff; */
    color:white;
    /* text-transform:uppercase; */
    font:22px sans-serif;
    text-align:center;
`;

export const DetailHome = styled.div`
  width:100%;
  height:1px;
  background-color:#DC143C;
`;