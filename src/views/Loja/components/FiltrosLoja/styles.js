import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
    /* background-color: red; */
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-between;
    /* padding-top:40px; */
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
    flex:1;
    /* } */
`;

export const ContainerFiltros = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerItemTypeFiltro = styled.div`
    border-top-right-radius: 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    flex-wrap:nowrap;
    overflow: auto;
    width: 100%;
    /* max-width: 10vw; */
    background-color: ${colors.color_jokerz_6};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    padding-left: 50px;
    padding-right: 50px;
    @media (max-width: 600px) {
        overflow: scroll;
        padding-left: 50px;
        padding-right: 50px;
        justify-content: flex-start;
    }
    :before {
        /* border-style: solid;
        border-width: 20px 20px 0 20px;
        border-color: transparent transparent transparent ${colors.color_jokerz_6};
        content:"";
        height: 0;
        left: 50%; */
        /* margin-left: -20px; */
        /* position: absolute;
        top: -15px;
        left: 165px;
        z-index: 6;
        width: 0; */
    }
    :after {
        /* border-style: solid;
        border-width: 20px 20px 0 20px;
        border-color: ${colors.color_jokerz_6};
        border-top-left-radius: 5px;
        content:"";
        height: 15px; */
        /* margin-left: -20px; */
        /* position: absolute;
        top: -15px;
        left: 15px;
        z-index: 2;
        width: 150px; */
    }
`;  

export const ContentItemType = styled.button`
    color: ${colors.color_jokerz_1};
    width: 100px;
    height: 100%;
    padding: 10px;
    background-color: ${({select})=>select?colors.color_jokerz_6:colors.transparent2};
    filter: ${({select})=>select?'brightness(150%)':'brightness(100%)'};
    font-size: 14px;
    text-align: center;
    /* margin: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover{
        /* transform:scale(1.02); */
        filter: brightness(120%);
        /* border: 1px solid ${colors.black}; */
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

export const LabelFiltro = styled.div`
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
`;

export const ContentImageFiltro = styled.div`
    /* background-color: #aaa; */
    /* border-radius: 50%; */
    width: 50px;
    height: 60px;
    overflow: hidden;
    /* position: relative; */
    /* border:3px solid  ${colors.color_jokerz_2}; */
    /* margin-bottom: 15px; */
`;

export const LogoFiltro = styled.img`
    /* position: absolute;
    bottom: 0; */
    width: 100%;
`;

export const DividerFiltros = styled.div`
    /* position: absolute;
    bottom: 0; */
    width: 100%;
    border-bottom: 1px solid ${colors.white};
`;

export const ContinueLeft = styled.div`
    position: absolute;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    top: 0;
    left: 15px;
    z-index: 7;
    width: 50px;
    height: 100%;
    background-image: linear-gradient(to right, ${colors.dedtail1}, ${colors.transparent2});
`;

export const ContinueRight = styled.div`
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    position: absolute;
    top: 0;
    right: 15px;
    width: 50px;
    height: 100%;
    background-image: linear-gradient(to right,${colors.transparent2}, ${colors.dedtail1});
`;

export const ContainerFiltroSecond = styled.div`
    /* position: absolute;
    bottom: 0; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${colors.color_jokerz_6};
    width: 100%;
    padding:15px;
    padding-left: 50px;
    padding-right: 50px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const ContainerFiltroGeral = styled.div`
    position: relative;
    background-color: ${colors.primary};
    ${({nome})=>{
        return `
            :hover .dropdownFilter_${nome} {
                display: flex;
            }
        `
    }}
    margin: 5px;
`;

export const ContentFilter = styled.button`
    color: ${colors.white};
    background-color: ${colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 7px;
    padding-top: 7px;
    padding-bottom: 7px;
    position: relative;
    min-width: 130px;
    :before {
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: transparent ${colors.white} transparent transparent ;
        content:"";
        height: 0;
        /* margin-left: -20px; */
        position: absolute;
        bottom: 5px;
        right: 5px;
        z-index: 6;
        width: 0;
    }
    :focus {
        border: none;
        outline:none;
        outline-style: none;
    }
    :active {
        background-color: ${colors.color_jokerz_6};
    }
`;

export const ContainerOptionsFiltro = styled.div`
    position: absolute;
    background-color: ${colors.primary};
    width: 130px;
    z-index: 7;
    display: none;
    flex-direction: column;
`;

export const ContentOptionFiltro = styled.button`
    margin: 5px;
    background-color: ${({select})=>select?colors.white:colors.color_jokerz_6};
    padding: 5px;
    text-align: center;
    color: ${({select})=>select?colors.color_jokerz_6:colors.white};
    :active {
        background-color: ${colors.color_jokerz_1};
    }
    :hover{
        /* transform:scale(1.02); */
        display: block;
        /* border: 1px solid ${colors.black}; */
    }
    :focus {
        border: none;
        outline:none;
        outline-style: none;
    }
`;