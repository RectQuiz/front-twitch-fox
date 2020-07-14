import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: auto;
  max-height:70px;
  min-height:70px;
  color: #fff;
  display: flex;
  padding: 15px;
  /* position:absolute;
  top:0; */
  
`;

export const Content = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left:26px;
  padding-right:26px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      font-size: 20px;
      display: flex;
      align-items: center;
      padding: 0px 10px;
    }
    img {
      max-width: 100%;
      width: 30px;
      margin: 0px 10px;
    }
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  button.active {
    background-color:transparent;
    border-width:0;
  }
  
    @media (max-width: 700px) {
        justify-content: center;
    }
`;

export const ContainerLogo = styled.div`
    border: 0.8px solid #ddd;
`;

export const IconButton = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color:transparent;
    border-width:0;
    cursor: pointer;
    a{
    display:flex;
    align-items: center;
    justify-content: center;
    }
    a:active {
        background: #666;
        padding:5px;
    }
`;
