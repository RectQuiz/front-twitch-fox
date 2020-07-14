import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  z-index:5;
`;

export const TitleDivider = styled.div`
  max-width: 1150px;
  width: 100%;
  /* background-color: white; */
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  padding:7px;
`;

export const Line = styled.div`
    height:2px;
    width:100%;
    background-color:#DC143C;
`;

export const Title = styled.h2`
    text-transform:uppercase;
    padding-left:20px;
    padding-right:20px;
    color:white;
    text-align:center;
`;