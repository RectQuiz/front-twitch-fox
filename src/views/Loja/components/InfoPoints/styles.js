import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
    /* background-color: red; */
    width: 100%;
    /* min-height: 100vh; */
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-between;
    padding-top:40px;
    /* padding-bottom:40px; */
`;

export const Content = styled.div`
    /* background-color: #bdbdbd; */
    width: 100%;
    max-width: 1150px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:flex-start;
    border-width:1px;
    border-color:#bdbdbd;
    /* @media (max-width: 500px) { */
        flex-wrap:wrap;
    /* padding-bottom:40px; */
    flex:1;
    /* } */
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