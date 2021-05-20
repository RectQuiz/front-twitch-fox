import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa';
import { BsBoxArrowRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import colors from '../../styles/colors';

export const Container = styled.div`
    background-color:${colors.blue};
    display:flex;
    /* flex:1; */
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* height:100vh; */
`;
//MENU LATERAL
export const MenuLateral = styled.div`
    background-color:${colors.secondary_dashboard};
    position:fixed;
    /* height:100%; */
    z-index:7;
    border-radius: 1vw;
    top: 30px;
    left: 30px;
    bottom: 30px;
    padding:15px;
    width:300px;
    box-shadow: 0px 0px 20px 0.1px;
    min-width:300px;
    @media (max-width: 500px) {
        display: none;
    }
`;
    //HEADER MENU LATERAL
    export const HearderMenuLateral = styled.div`
        width:100%;

        /* background-color:${colors.blue}; */
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        padding:5vh;
    `;

    export const TituloMenuLateral = styled.h5`
        font-weight:bold;
        color:${colors.white};
        margin:0;
    `;

    //INFO USER
    export const ContainerInfoUser = styled.div`
        width:100%;
        /* background-color:${colors.red}; */
        padding-bottom:5vh;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        padding-left:15px;
        padding-right:15px;
    `;
    
    export const ContentInfoUser = styled.button`
        width:100%;
        /* background-color:${colors.white}; */
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        border: 2px solid ${colors.secondary_dashboard};
        border-radius:10px;
        padding:5px;
        :active {
            box-shadow: 0px 0px 0px 0px #4F4F4F;
            border-color: ${colors.dedtail2};
        }
        :focus{
            outline: thin dotted;
            outline: 0px auto -webkit-focus-ring-color;
            outline-offset: 0px;
        }
    `;
    
    export const ContentImageUser = styled.div`
        background-color:${colors.secondary_dashboard};
        width:2.7vw;
        height:2.7vw;
        padding:3px;
        min-width:2.7vw;
        min-height:2.7vw;
        border-radius: 50%;
    `;
    
    export const ImageUser = styled.img.attrs({
        alt:"Avatar",
    })`
        vertical-align: middle;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    `;
    
    export const DescInfoUser = styled.div`
        width:100%;
        height:100%;
        /* background-color:${colors.blue}; */
        padding-top:5px;
        padding-bottom:5px;
        padding-left:10px;
        padding-right:10px;
        line-height: 1.3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        color:${colors.white};
        font-size:14px;
        text-align:left;
    `;
    
    export const NameUser = styled.p`
        margin:0;
        color:${colors.white};
        font-size:14px;
    `;
        
    export const InfoUser = styled.p`
        margin:0;
        color:${colors.white};
        font-size:14px;
    `;

    export const IconFimItemInfoUser = styled(FaArrowRight).attrs({
        color:colors.white,
        size:25
    })`
    `;

    //LISTA MENU LATERAL
    export const ListaMenuLateral = styled.div`

    `;

        //ITEM MENU LATERAL
        export const ContainerItem = styled.button`
            width:100%;
            /* background-color:${colors.red}; */
            padding-top:10px;
            padding-bottom:10px;
            margin-bottom:25px;
            border: 2px solid ${colors.secondary_dashboard};
            border-radius:10px;
            border-color:${(props)=>props.selected?colors.dedtail2:colors.secondary_dashboard};
            :active {
                box-shadow: 0px 0px 0px 0px #4F4F4F;
                border-color: ${colors.dedtail2};
            }
            :focus{
                outline: thin dotted;
                outline: 0px auto -webkit-focus-ring-color;
                outline-offset: 0px;
            }
        `;

        export const ContentItem = styled.div`
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            /* background-color:${colors.blue}; */
            align-items:center;
            flex:1;
        `;

        export const IconInicioItem = styled(FaDiscord).attrs({
            color:colors.white,
            size:25
        })`
            flex:2;
        `;

        export const ContentTitleItem = styled.div`
            display:flex;
            justify-content:flex-start;
            align-items:flex-start;
            /* background-color:${colors.dedtail1}; */
            flex:6;
            font-size:16px;
            /* font-weight:bold; */
            color:${colors.white};
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        `;
        
        export const TitleItem = styled.p`
            margin:0;
            font-size:20px;
            /* font-weight:bold; */
            color:${colors.white};
        `;

        export const IconFimItem = styled(FaArrowRight).attrs({
            color:colors.white,
            size:17
        })`
            flex:2;
        `;

//CONTENT DASHBOARD
export const ContentDashboard = styled.div`
    background-color:${colors.primary};
    flex:1;
`;
