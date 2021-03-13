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

    border:none;
    cursor:cell;

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
// End - Card Intes


