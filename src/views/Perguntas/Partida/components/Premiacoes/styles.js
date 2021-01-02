import styled from 'styled-components';

export const Container = styled.div`
  position:absolute;
  right:0;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  /* background-color:red; */
  height:100%;
  width:600px;
  top:0;
  bottom:100px;
  /* padding:10px; */
  padding-bottom:10px;
  padding-top:10px;
`;

export const Content = styled.div`
  background-color: #05060D;
  height:100%;
  width:100%;
  padding:15px;
  /* padding-top:90px; */
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  border: 2px solid #fff;
  /* transform:translateX(2px); */
  overflow:auto; 
`;

export const ContainerArrow = styled.button`
  height:10vh;
  width:3vh;
  background-color: #05060D;
  border-top-left-radius:20px;
  border-bottom-left-radius:20px;
  border: 2px solid #fff;
  border-left-width:2px;
  border-right-width:0px;
  border-top-width:2px;
  border-bottom-width:2px;
  border-color:#fff;
  transform:translateX(2px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  z-index:3;
  align-items:center;
  padding-left:5px;
  cursor: pointer;
  :focus{
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
  }
`;

export const ContainerPremio = styled.div`
  width:100%;
  background-color:${(props)=>props.cor};
  color:${(props)=>props.cor2};
  min-height:32px;
  max-height:32px;
  border-radius:3px;
  border: 1px solid #fff;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  /* padding-left:7px; */
  padding-right:7px;
  margin-bottom:10px;
`;

export const ContentIndicePremio = styled.div`
  /* background-color:blue; */
  display:flex;
  flex:1;
  justify-content:center;
  align-items:center;
  padding-right:5px;
`;

export const LabelIndicePremio = styled.span`
  /* background-color:green; */
  padding:5px;
  font-weight:bold;
`;

export const ContentImagePremio = styled.div`
  height: 100%;
  width: 5vw;
  max-width:30px;
  /* max-height:30px; */
  /* border-radius: 50%; */
  overflow: hidden;
  /* background-color:green; */
  display:flex;
  flex:3;
  justify-content:center;
  align-items:center;
`;

export const ImagePremio = styled.img`
/* vertical-align: middle; */
  object-fit: contain;
  height: 100%;
  width: 100%;
  /* border-radius: 50%; */
  /* background-color:#fff; */
  /* border: 2px solid #141414; */
  transition: all .3s ease;
`;

export const ContentNomePremio = styled.div`
  /* background-color:red; */
  display:flex;
  flex:6;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  padding-left:15px;
  padding-right:5px;
`;

export const NomePremio = styled.span`
  font-weight:bold;
  font-size:13px;
  white-space: nowrap;
  overflow:hidden;display: inline-block;
  text-overflow: ellipsis;
`;

export const ContainerAjudas = styled.div`
  width:100%;
  /* background-color:red; */
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding-bottom:10px;
  /* padding-top:10px; */
  /* padding-left:15px;
  padding-right:15px; */
`;

export const ContentAjuda = styled.button`
  height: 5vw;
  width: 5vw;
  min-width:50px;
  min-height:50px;
  border-radius: 5px;
  overflow: hidden;
  /* margin-right:30px; */
  /* background-color:#141414; */
  /* box-shadow: 1px 1px 15px -5px black; */
  transition: all .3s ease;
  padding:0.1vw;
  opacity:${(props)=>props.status?0.0:1};
  filter:${(props)=>props.status?'brightness(100%)':'brightness(200%)'};
  /* cursor: pointer; */
  :focus{
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
  }
`;

export const ImageAjuda = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  /* background-color:#141414; */
  /* border: 2px solid #141414; */
  transition: all .3s ease;
`;
export const ContatoCreator = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:flex-end;
    /* background-color:red; */
    color:#fff;
    font-size:10px;
    height:100%;

`;
