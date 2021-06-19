import styled from 'styled-components';
import colors from '../../../../styles/colors';
let tamanho_roleta = 400;
let tamanho_roleta_small = 350;

export const Container = styled.div`
  max-width: 100vw;
  /* padding-top: 20px; */
`;

export const Content = styled.div`
    border: 1px solid #000;
    box-sizing: border-box;
    height: ${tamanho_roleta}px;
    margin: 0 auto 2em;
    overflow: hidden;
    position: relative;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    width: ${tamanho_roleta}px;
    max-width: 100%;
    @media (max-width: 500px) {
        height: ${tamanho_roleta_small}px;
        width: ${tamanho_roleta_small}px;
    }
    :before {
        border-style: solid;
        border-width: 20px 20px 0 20px;
        border-color: #ffffff transparent transparent transparent;
        content:"";
        height: 0;
        left: 50%;
        margin-left: -20px;
        position: absolute;
        top: 8px;
        z-index: 2;
        width: 0;
    }
`;

export const ButtonRoleta = styled.div`
    background-color: #404040;
    color: #fff;
    border: 4px solid #ffffff;
    -webkit-box-shadow: inset 0 -8px 0 #2b2b2b;
    -moz-box-shadow: inset 0 -8px 0 #2b2b2b;
    box-shadow: inset 0 -8px 0 #2b2b2b;
    font-family:"avantgarde_bold", Helvetica, Arial, sans-serif;
    height: 100px;
    left: 50%;
    line-height: 100px;
    margin: -54px 0 0 -54px;
    padding: 0;
    position: absolute;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    text-decoration: none;
    text-align: center;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    text-transform: uppercase;
    top: 50%;
    width: 100px;
    cursor: pointer;
    :active {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        height: 96px;
        margin-top: -50px;
    }
`;

export const ContentCentroRoleta = styled.ul`
    border: 12px solid #ffffff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    text-align: center;
    width: 100%;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
    transition: transform 3s ease;
`;

export const ContentItemRoleta = styled.div`
    font-family:"avantgarde_bold", Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 50%;
    line-height: 18px;
    list-style: none;
    left: 50%;
    /* background-color: red; */
    /* border:1px solid ${colors.white}; */
    margin: 0 0 0 -106px;
    padding: 0;
    position: absolute;
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    top: 0;
    width: 57%;
    @media (max-width: 500px) {
        width: 65.5%;
    }
    :before {
        display: none;
    }
    :nth-child(1) {
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    :nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    :nth-child(3) {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    :nth-child(4) {
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    :nth-child(5) {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    :nth-child(6) {
        -webkit-transform: rotate(205deg);
        -moz-transform: rotate(225deg);
        -ms-transform: rotate(225deg);
        -o-transform: rotate(225deg);
        transform: rotate(225deg);
    }
    :nth-child(7) {
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        transform: rotate(270deg);
    }
    :nth-child(8) {
        -webkit-transform: rotate(315deg);
        -moz-transform: rotate(315deg);
        -ms-transform: rotate(315deg);
        -o-transform: rotate(315deg);
        transform: rotate(315deg);
    }
    :nth-child(odd) img {
        -webkit-opacity: 0.8;
        -moz-opacit: 0.8;
        opacity: 0.8;
    }
`;

export const LabelItemRoleta = styled.button`
    color: #fff !important;
    left: 0;
    position: absolute;
    text-decoration: none;
    top: 20px;
    width: 100%;
`;