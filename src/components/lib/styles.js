import styled, { keyframes } from 'styled-components';

//Color Styles palests
var Primary = '#333333';
var Secodary = 'white';
// var HoverSecondary ='#434343';
var DangerColor = '#aa0000';
var DangerHover = '#880000';

// Start - Body Config
export const BodyGalery = styled.div`
    width:100%;
    background-color:white;
    display:flex;
    flex-wrap:wrap;
    background-size:cover;
    background-repeat:no-repeat;
    border-top: solid 5px #333333;
    border-bottom:solid 5px #333333;
    background-image: linear-gradient(to right, #2b2b2b , #1a1a1a);
`;
// End - Body Config




//BoxIcons
export const BoxContent = styled.div`
    width:33%;
    padding:20px;
    display:flex;
    justify-content:center;
    line-height:1.5;
    
    @media(max-width:800px){
        padding:20px;
        width:100%;
        max-width:100%;
    }
`;

export const BoxContentItems = styled.div`
  color:white;
  position:relative;
  width:100%;
  
  @media(max-width:800px){
 
  }

`;


//Icons
const keyFrameAnimatedIco = keyframes` //Animation Key Frame No configured
   
`

const keyFrameAnimatedCard = keyframes` //Animation Key Frame No configured
     from {
         filter: drop-shadow(0 0 0 #33ffee);
         
     }
     to {
         filter: drop-shadow(0 0 5px #33ffee);
     }
`

export const Icos = styled.img`
    width:100px;
    cursor:pointer;
    opacity:0.1;
    position:absolute;
    transition: all 0.5s;
    &:hover{
        transition: all 0.5s;
        opacity:1;
    }

    @media(max-width:800px){
        position:relative;
    }
`;

export const ContainerTitle = styled.div`
    min-height:30px;
    width:100%;
`;

//text Icons Items 
export const GaleryText = styled.h2`
    font-family: 'Bebas Neue', sans-serif;
    z-index: 1;
    letter-spacing:4px;
    color:white;
    text-transform:uppercase;
    font-size:40px;
    text-align:center;
`;

export const CssIco = styled(Icos)`
    top:1%;
    left:3%;
    transform: rotate(-20deg);   
`;

export const HtmlIco = styled(Icos)`
    top:5%;
    right:5%;
    width:150px;
    transform: rotate(10deg);   
`;
export const JavaScriptIco = styled(Icos)`
    top:80%;
    right:60%;
    width:200px;
    transform: rotate(-15deg);   
`;
export const ReactIco = styled(Icos)`
    top:10%;
    right:30%;
    width:400px;
    transform: rotate(-15deg);   
`;
export const WordpressIco = styled(Icos)`
    top:40%;
    right:-10%;
    transform: rotate(-30deg);  
    width:350px;
`;

export const Divider = styled.div`
    height:5px;
    width:50px;
    border-radius:5px;
    margin-top:10px;
    margin-bottom:15px;
    background-color:${Primary};
    margin-left:1px;
`;


// End Galery Description 

// Start - Containter cards 
export const Container = styled.div`
    width:60%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:30px;
    padding-bottom:30px;  
    @media(max-width:800px){
        width:100%;
        max-width:100%;
    }
`;

export const SubContainer = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    
`;
// End - Containter Cards

// Start - Card Intes 
export const Card = styled.div`
    max-width:30%;
    width:30%;
    margin:1%;
    min-height:200px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    background-image:url(${props => props.image});
    border-radius:15px;
    background-size:100%;
    background-position:center;
    background-repeat:no-repeat;
    -webkit-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.1);
    -webkit-filter: sepia(50%) brightness(80%) contrast(110%);
    outline:none;
    border:none;
    cursor:pointer;
    transition:ease-in 0.2s;
    &:hover{
        transform:scale(1.2);
        transition:0.2s;
        -webkit-filter: sepia(0%);
        animation: ${keyFrameAnimatedCard} 1s alternate infinite ease-in-out; 
        z-index:1;
    }
    @media(min-width:2400px){
        width:18%;
        max-width:100%;
    }

    @media(max-width:800px){
        width:100%;
        max-width:100%;
    }

`;

export const Title = styled.h2`
    color:white;
    text-transform:uppercase;
    font-size:18px;
    cursor:default;
`;

export const Description = styled.p`

`;


export const NavigateDiv = styled.div`
   display:flex;
   padding-top:30px;
   padding-bottom:10px;
`;

export const ButtonIndex = styled.button`
    border-radius:5%;
    width:30px;
    height:30px;
    font-size:12px;
    color:white;
    border:none;
    font-weight:bold;
    background-color:${Primary};
    margin:0 5px;
    padding:0;
    transition: 0.2s;
    outline: none;
    animation: ${keyFrameAnimatedIco} 1s alternate infinite ease-in-out; 
`;

export const ButtonPage = styled.button`
    background-color:${Secodary};
    border-radius:100%;
    width:30px;
    padding:0;
    height:30px;
    font-size:12px;
    color:#333333;
    border:none;
    font-weight:bold;
    margin:0 5px;
    outline: none;
    transition: ease-out 0.2s;

    &:hover{
        cursor:pointer;
        transition: ease-out 0.2s;
        border-radius:5%;
    }
`;

export const ArrowPage = styled.button`
    border:none;
    cursor:pointer;
    outline: none;
    color:white;
    font-size:12px;
    background:none;
`;


export const containContentModal = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    background-color:${Secodary};
    height:100px;
    width:100%;
`;

// End - Card Intes


export const BtnCLose = styled.button`
    background-color:${DangerColor};
    border:none;
    color:white;
    padding:5px 10px;
    cursor:pointer;
    font-weight:bold;
    &:hover{
      background-color:${DangerHover}
    }
`;








