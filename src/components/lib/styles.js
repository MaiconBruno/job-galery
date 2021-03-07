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
// End - Card Intes


