import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index:7; /* Sit on top */
    /* padding-top: 100px;  */
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; 
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentAddPoints = styled.div`
    max-height:100%;
    min-height:10vh;
    max-width: 30vw;
    height:auto;
    /* max-width:25vw; */
    /* min-width:25vw; */
    background-color:#24252f;
    border-radius:7px;
    border: 3px solid #141414;
    align-self:center;
    padding:10px;
    overflow: hidden;

    @media (max-width: 500px) {
        max-width:300px;
        flex-direction: row;
    }
    /* display: flex; */
    /* flex-direction: row; */
`;

export const TitleAddPoints = styled.div`
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`;

export const ContentFormAddPoints = styled.div`
`;

export const FormAddPoints = styled.form`
    width:100%;
    background-color:	#808080;
    border-radius:12px;
    border: 4px solid #363636;
`;

export const ContentForm = styled.div`
    /* background-color:#44f; */
    border-radius:8px;
    padding-left:10%;
    padding-right:10%;
    /* padding-top:20px; */
    padding-bottom:10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
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
`;

export const LabelForm = styled.label`
    color:#141414;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const InputForm = styled.input`
    width:100%;
    padding:5px;
    border-radius:10px;
    border: 2px solid #141414;
`;

export const ErroForm = styled.span`
    padding-top:5px;
    color:#8B0000;
    font-size:12px;
    text-transform:uppercase;
`;

export const InputRequirede = styled.div`
    color: #A52A2A;
    margin-left: 5px;
`;

export const ContainerButton = styled.div`
    width:100%;
    /* background-color:#45f; */
    padding:5px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const ButtonForm = styled.button`
    background-color:${colors.primary_geral};
    padding:7px;
    border-radius:10px;
    min-width:20%;
    color:#fff;
    border: 2px solid #141414;
    box-shadow: 0px 0px 3px 0px #4F4F4F;
    :active {
        box-shadow: 0px 0px 0px 0px #4F4F4F;
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;
