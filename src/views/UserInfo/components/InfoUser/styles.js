import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:auto;
    padding-top:40px;
    padding-bottom:40px;
    /* background-color: red; */
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  max-width: 1150px;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:flex-start;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
    flex-direction:row;
    flex-wrap:wrap;
  padding-bottom:40px;
  flex:1;
  /* } */
`;

//info
export const ContentItemInfo = styled.div`
    width:100%;
    /* background-color:green; */
    /* padding:15px; */
    border:1px solid rgba(76,76,84);
    border-radius:7px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin-left:10px;
    margin-right:10px;
    margin:10px;
`;

export const ItemLabelInfo = styled.div`
    /* width:10%; */
    padding:10px;
    background-color:rgba(76,76,84);
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    color:#fff;
    font-size:16px;
    border:1px solid rgba(41,41,46);
`;

export const ItemValueInfo = styled.div`
    /* width:100%; */
    padding:10px;
    border-top-right-radius:7px;
    border-bottom-right-radius:7px;
    color:#fff;
    font-size:16px;
`;


//channels
export const ContentItemInfoChannels = styled.div`
    width:100%;
    /* background-color:green; */
    /* padding:15px; */
    border-radius:7px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin-left:10px;
    margin-right:10px;
    margin:10px;
`;

export const ItemLabelChannels = styled.div`
    width:100%;
    padding:10px;
    background-color:rgba(76,76,84);
    color:#fff;
    font-size:16px;
    border:1px solid rgba(76,76,84);
    text-align:center;
    text-transform:uppercase;
    border-top-right-radius:7px;
    border-top-left-radius:7px;
`;

export const ItemValuesChannels = styled.div`
    width:100%;
    padding:7px;
    color:#fff;
    font-size:16px;
    border:1px solid ${({status})=>status?'#008080':'#B22222'};
    border-top-right-radius:7px;
    border-bottom-right-radius:7px;
    /* background-color:red; */
`;

export const ItemLabelChannel = styled.div`
    /* width:10%; */
    padding:7px;
    background-color:${({status})=>status?'#008080':'#B22222'};
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    color:#fff;
    font-size:16px;
    border:1px solid ${({status})=>status?'#008080':'#B22222'};
`;

export const ContentValueInfoChannels = styled.div`
    width:100%;
    /* background-color:green; */
    /* padding:15px; */
    border-bottom-right-radius:7px;
    border-bottom-left-radius:7px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding-left:10px;
    padding-right:10px;
    border:1px solid rgba(76,76,84);
    min-height:20px;
`;

export const ContainerValueInfoChannels = styled.div`
    width:100%;
    /* border:1px solid rgba(76,76,84); */
    /* background-color:green; */
    /* padding:15px; */
    border-radius:7px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    /* padding-left:10px;
    padding-right:10px; */
    margin:10px;
`;