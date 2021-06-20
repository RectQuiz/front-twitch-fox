import styled from 'styled-components';
import colors from '../../styles/colors';

export const ImageFundo = styled.div`
`;

export const Content = styled.div`
    max-width: 100vw;
    max-height:100vh;
    height:100vh;
    padding-top:165px;
`;

export const BackgroundColor = styled.div`
    width:100%;
    min-height:100%;
    height:auto;
    background-color: #05060D;
    /* background-color: #0506; */
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    position:relative;
    padding-bottom:200px;
    /* opacity:0.3; */
`;

export const ContentInfoPoints = styled.div`
  /* width:100%; */
  /* background-color:green; */
  /* padding:15px; */
  border:1px solid rgba(76,76,84);
  border-radius:7px;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-left:15px;
  margin-right:15px;
  margin-bottom:20px;
  margin-top:30px;
`;

export const PointsLabel = styled.div`
    padding:10px;
    background-color:rgba(76,76,84);
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    border:1px solid rgba(41,41,46);
    color:#fff;
`;

export const PointsValue = styled.div`
    padding-left:15px;
    padding-right:15px;
    color:orange;
`;

export const ContentSelect = styled.div`
    width: 200px;
`;

export const ContainerSelectInput = styled.div`
`;

export const LabelSelect = styled.div`
    color: ${colors.white};
`;

export const ContentTrocarCanal = styled.button`
    width: 200px;
    background-color: ${colors.primary_geral_dark};
    border-radius: 10px;
    padding: 7px;
    text-decoration: none;
    cursor: pointer;
    :active {
        width: 190px;
    }
`;

export const ContainerButtonTrocarCanal = styled.div`
    color: ${colors.white};
    text-align: center;
`;

export const ContainerInput = styled.div`
    /* background-color:#44f; */
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding: 5px;
    padding-bottom:10px;
    .image_premio{
        width:100%;
        text-align:center;
        /* background-color:#fff; */
    }
    margin-bottom: 10px;
`;

export const InputValue = styled.input`
    width:100%;
    padding:5px;
    border-radius:10px;
    border: 2px solid #141414;
`;

