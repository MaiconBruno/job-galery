import styled from 'styled-components';


// Start - Body Config
export const Body = styled.div`
  
    height:100vh;
    width:100%;
    background-color:white;
`;
// End - Body Config

// Start - Containter cards 
export const Container = styled.div`
    width:100%;
    height:auto;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#f3f3f3;
    padding-top:30px;
    padding-bottom:30px;  
`;

export const SubContainer = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    background-color:#f3f3f3;
    
`;
// End - Containter Cards

// Start - Card Intes 
export const Card = styled.div`
    max-width:23%;
    width:23%;
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
    cursor:cell;
    transition:0.2s;
    &:hover{
        transform:scale(0.8);
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
    color:#323232;
    border:none;
    font-weight:bold;
    margin:0 5px;
    padding:0;
    border:solid 2px #323232;
    transition: 0.5s;
    outline: none;
`;

export const ButtonPage = styled.button`
    background-color:#323232;
    transition: 0.5s;
    border-radius:100%;
    width:30px;
    padding:0;
    height:30px;
    font-size:12px;
    color:white;
    border:none;
    font-weight:bold;
    margin:0 5px;
    outline: none;
    &:hover{
        transition: 0.5s;
        background-color:#535353;
        cursor:pointer;
    }
`;

export const ArrowPage = styled.button`
    border:none;
    cursor:pointer;
    outline: none;
    color:#323232;
`;

export const ModalFrame = styled.div`
    height:100vh;
    width:100%;
    background-color:rgb(25, 25, 25, 0.5);
    position:absolute;
    visibility:${props => props.show};
    display:flex;
    justify-content:center;
    align-items:center;
`;
// End - Card Intes


//Start - Modal Components

export const CloseModalButton = styled.button`
    border:none;
    background-color:#ff0000;
    color:white;
    font-size:15px;
    font-weight:bold;
    width:30px;
    height:30px;
    position:absolute;
    top:10%;
    right:10%;
    border-radius:5px;
    cursor:pointer;
    outline:none;
`;

export const BoxModalCard = styled.div`
     background-color:white;
     width:80%;
     min-height:60vh;
     display:flex;
     border-radius:10px;
`;

export const BoxImage = styled.div`
   width:60%;
   background-image:url(${props => props.image});
   border-radius: 10px 0px 0px 10px;
   background-size:cover;
   background-repeat:no-repeat;
`;

export const BoxContent = styled.div `
    background-color:#f3f3f3;
    min-height:60vh;
    width:40%;
    padding:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius: 0px 10px 10px 0px;
`;

export const BoxTitle = styled.h2 `
    color:black;
    font-size:18px;
`;
export const BoxText = styled.p`
    color:black;
`;
//End - Modal Components



