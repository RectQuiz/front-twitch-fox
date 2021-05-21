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
`;

export const ContentButton = styled.button`
    border-radius: 1vw;
    background-color: ${colors.red}; /* For browsers that do not support gradients */
    background-image: linear-gradient(to right,${(props)=>props.color1?props.color1:colors.primary_dashboard}, ${(props)=>props.color2?props.color2:colors.secondary_dashboard});
    width: 13vw;
    height: 13vw;
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
    
`;

export const TextButton = styled.div`
  font-weight: bold;
  font-size: 1.3vw;
  color: ${colors.primary_dashboard};
`;