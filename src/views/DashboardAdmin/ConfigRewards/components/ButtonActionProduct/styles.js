import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  /* padding: 15px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  /* background-color: ${colors.blue}; */
`;

export const ContentButton = styled.button`
    border-radius: 10px;
    /* background-color: ${colors.red}; */
    background-image: linear-gradient(to right,${(props)=>props.color1?props.color1:colors.primary_dashboard}, ${(props)=>props.color2?props.color2:colors.secondary_dashboard});
    width: 100%;
    max-width: 250px;
    min-width: 250px;
    min-height: 250px;
    /* height: 13vw; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover{
        transform:scale(1.02);
        filter: brightness(120%);
    }
    :active {
        transform: translateY(4px);
    }
    :focus {
        border: none;
        outline:none;
        outline-style: none;
    }
    @media (max-width: 1010px) {
    }
    
`;

export const TextButton = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: ${colors.primary_dashboard};
`;