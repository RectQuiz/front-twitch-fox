import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  
`;

//FORM

    export const FormLoginAdmin = styled.form`
        width:100%;
        background-color:	#808080;
        border-radius:12px;
        border: 4px solid #363636;
    `;

//IPNUT

    export const ContainerFormLogin = styled.div`
    background-color:${colors.dedtail1};
    padding:10px;
    border: 3px ${colors.secundary} solid;
    border-radius:10px;
    `;

    export const ContainerInput = styled.div`
        /* background-color:#44f; */
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:flex-start;
        padding-bottom:10px;
    `;

    export const LabelInput = styled.label`
        color:${colors.white};
        font-weight: bold;
    `;

    export const Input = styled.input`
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

//IPNUT

//BUTTON

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
        background-color:#DC143C;
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

//BUTTON