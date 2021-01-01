import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:auto;
    padding-bottom:20px;
    /* background-color:#fff; */
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
    flex-direction:row;
    flex-wrap:wrap;
    padding-bottom:40px;
    /* background-color:#fd5; */
    /* } */
`;

export const ContainerList = styled.div`
    width:100%;
    background-color:#808080;
    border-radius:12px;
    border: 4px solid #363636;

`;

export const HeaderList = styled.div`
    width:100%;
    background-color:#1c1c1c;
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* background-color:blue; */
`;

export const TitleList = styled.header`
    font-weight:bold;
    font-size:20px;
    color:#fff;
    /* background-color:red; */
`;

export const ContentList = styled.div`
    border-radius:8px;
    padding-left:10%;
    padding-right:10%;
    padding-top:20px;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
`;

export const ContainerItem = styled.div`
    width:100%;
    background-color:#1c1c1c;
    margin-bottom:10px;
    padding:10px;
    border-radius:12px;
    border:${(props)=>props.ativa?'4px solid #363636':'4px solid red'};
`;

export const ContentItem = styled.div`
    width:100%;
    /* background-color:red; */
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const TitleItem = styled.span`
    color:#fff;
    text-transform:uppercase;
`;

export const ContentActionItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const DeleteItem = styled.button`
    background-color:#DC143C;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:15px;
    padding-right:15px;
    border-radius:10px;
    min-width:20%;
    color:#fff;
    /* border: 2px solid #141414; */
    box-shadow: 0px 0px 3px 0px #696969;
    :active {
        box-shadow: 0px 0px 0px 0px #696969;
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;