import styled from 'styled-components';
import colors from '../../../../styles/colors';

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
    flex-direction:column;
    align-items: center;
    justify-content:center;
    border-width:1px;
    border-color:#bdbdbd;
    @media (max-width: 500px) {
        max-width: 100vw;
    }
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
    @media (max-width: 500px) {
        max-width: 100vw;
    }
`;

export const ItemLabelInfo = styled.div`
    /* width:10%; */
    max-width: 130px;
    min-width: 130px;
    padding:10px;
    background-color:rgba(76,76,84);
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    color:#fff;
    font-size:16px;
    border:1px solid rgba(41,41,46);
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const BodyItem = styled.div`
    width:100%;
    /* margin: 3px; */
    /* background-color: ${colors.blue}; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ItemValueInfo = styled.div`
    /* width:100%; */
    padding:10px;
    border-top-right-radius:7px;
    border-bottom-right-radius:7px;
    color:#fff;
    font-size:16px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 500px) {
        max-width: 30vw;
    }
`;

export const ActionItem = styled.button`
    /* width:100%; */
    padding:10px;
    border: 0px solid rgba(76,76,84);
    border-left-width: 1px;
`;

export const InputItem = styled.input`
    width:100%;
    padding:5px;
    border-radius:10px;
    border: 2px solid white;
    color:${colors.white};
    background-color: ${colors.transparent};
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
    @media (max-width: 500px) {
        max-width: 100vw;
    }
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
    border:1px solid ${({status})=>status?'#008080':colors.color_jokerz_2};
    border-top-right-radius:7px;
    border-bottom-right-radius:7px;
    /* background-color:red; */
`;

export const ItemLabelChannel = styled.div`
    /* width:10%; */
    padding:7px;
    background-color:${({status})=>status?'#008080':colors.color_jokerz_2};
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    color:#fff;
    font-size:16px;
    border:1px solid ${({status})=>status?'#008080':colors.color_jokerz_2};
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

//selecinar tipo
export const ContainerSelectTypeAccounts = styled.div`
    max-width:200px;
    /* background-color: ${colors.color_jokerz_2}; */

`;

export const ContainerSelectTypeAccount = styled.div`
    width: 100%;
    /* background-color: ${colors.color_jokerz_3}; */
`;

export const ContainerButtonSelectTypes = styled.div`
    width: 100%;
    /* background-color: ${colors.color_jokerz_4}; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`;

export const ContainerButtonVoltar = styled.button`
    width: 50%;
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
    background-color: ${colors.red_dark};
`;

export const ContainerButtonContinuar = styled.button`
    width: 50%;
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
    background-color: ${colors.green_dark};
`;

export const ContentValueInfoPerguntas = styled.div`
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
    padding-bottom:10px;
    border:1px solid rgba(76,76,84);
    min-height:20px;
    a {
        color: #f2f2f2;
        text-align: center;
        text-decoration: none;
        font-size: 17px;
        display:flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ContainerValuePerguntas = styled.div`
    width:100%;
    /* background-color:green; */
    /* padding:15px; */
    /* border-bottom-right-radius:7px;
    border-bottom-left-radius:7px; */
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding-left:10px;
    padding-right:10px;
    padding-top:10px;
    /* padding-bottom:10px; */
    /* border:1px solid rgba(76,76,84); */
    min-height:20px;
`;

export const ItemLabelInfoPerguntas = styled.button`
    /* width:10%; */
    padding:10px;
    background-color:${(props)=>props.color?props.color:'#008080'};
    border-radius:7px;
    /* border-bottom-left-radius:7px; */
    color:#fff;
    min-width:200px;
    font-size:16px;
    /* padding-bottom:10px; */
    border:1px solid ${(props)=>props.color?props.color:'#008080'};
    box-shadow: 0px 0px 4px 0px #696969;
    :active {
        box-shadow: 0px 0px 0px 0px #696969;
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;

export const TitleSelectAccount = styled.div`
    color:#fff;
    font-size:15px;
    padding:10px;
`;

export const ContainerInputCodigo = styled.div`
    /* background-color:#44f; */
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding-bottom:10px;
    padding-top: 10px;
`;

export const LabelForm = styled.label`
    color:${colors.white};
    font-weight: bold;
`;

export const InputCodig = styled.input`
    width:100%;
    padding:5px;
    border-radius:10px;
    border: 2px solid #141414;
`;

export const ContentLogoParceiro = styled.div`
    background-color: #aaa;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    /* position: relative; */
    border:3px solid  ${colors.color_jokerz_2};
    margin-bottom: 15px;
`;

export const LogoParceiro = styled.img`
    /* position: absolute;
    bottom: 0; */
    width: 100%;
`;

export const ContainerAvisoIndicacao = styled.div`
    background-color: ${colors.color_jokerz_6};
    padding:5px;
`;

export const ContentAvisoIndicacao = styled.div`
    background-color: ${colors.color_jokerz_1};
    border-radius: 10px;
    color:#fff;
    font-size:13px;
    padding:10px;
    text-align: center;
`;