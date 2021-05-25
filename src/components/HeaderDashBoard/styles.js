import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  /* background-color: ${colors.red}; */
  border-radius: 30px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  /* border-bottom: 3px solid ${colors.black}; */
  /* margin-bottom: 15px; */
`;

export const ContentTitleHeader = styled.div`
  flex:8;
  width: 100%;
  /* background-color: ${colors.red}; */
  /* border-radius: 30px; */
  text-align: left;
`;

export const SubTitleHeader = styled.div`
  padding-bottom:20px;
`;

export const TitleHeader = styled.h2`
  font-weight: bold;
`;

export const ContentIconsHeader = styled.div`
  flex:2;
  /* background-color: ${colors.green}; */
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ContentIcons = styled.button`
  padding:10px;
`;
