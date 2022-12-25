import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
*{
  margin:0;
  outline:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Raleway', sans-serif;
}
/* .carousel .slide {
    background: rgba(0, 0, 0, 0.2); }
    
.carousel .slide .legend{
    background: rgba(0, 0, 0, 0.2); }
    
    .carousel .control-dots .dot{
    background: rgba(0, 0, 0, 0.2); }
.carousel .carousel-status{
    background: rgba(0, 0, 0, 0.2); } */

html,body,#root{
  height:100%;
  --primary-geral: ${colors.primary_geral};
}
body::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

body::-webkit-scrollbar-button:start:decrement,
body::-webkit-scrollbar-button:end:increment {
  display: block;
  height: 0;
  background-color: transparent;
}

body::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
  opacity: 0.1;
  -webkit-border-radius: 0;
  -webkit-border-bottom-right-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
}

body::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #ccc;
  -webkit-border-radius: 8px;
}

button{
  background:transparent;
  border:none;
  color:#fff;
  cursor:pointer;
}

`;
