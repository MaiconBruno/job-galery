import styled, {keyframes} from 'styled-components';

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


// Start Galery Descripton
export const BoxContent = styled.div`
    width:33%;
    height:auto;
    padding:0px 50px;
    padding-top:80px;
    display:flex;
    justify-content:center;
    line-height:1.5;
    @media(max-width:800px){
        padding:20px;
        width:100%;
        max-width:100%;
    }
`;

export const BoxContentText = styled.div`
  color:white;
`;

const keyFrameAnimatedIco = keyframes`
  
`

export const CssIco = styled.img`
    transform-style:preserve-3d;
    width:350px;
    cursor:pointer;
    opacity:0.1;
    animation-name: ${keyFrameAnimatedIco};
        animation-duration: 2s;
        animation-iteration-count: infinite;
    &:hover{
        
    }
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
    -webkit-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.1);
    outline:none;
    border:none;
    cursor:pointer;
    transition:ease-in 0.2s;
    &:hover{
        transform:scale(1.2);
        transition:0.2s;
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
    transition: 0.5s;
    outline: none;
    transition: ease-out 0.8s;
`;

export const ButtonPage = styled.button`
    background-color:${Secodary};
    transition: 0.5s;
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
    transition: ease-out 0.5s;

    &:hover{
        transition: 0.5s;
        cursor:pointer;
        transition: ease-out 0.5s;
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








