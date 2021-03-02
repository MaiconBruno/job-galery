import styled from 'styled-components';

export const Body = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100%;
    background-color:white;
`;

export const Container = styled.div`
    width:100%;
    height:auto;
    background-color:white;
    display:flex;
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

export const Card = styled.div`
    max-width:23%;
    width:23%;
    margin:1%;
    min-height:200px;
    background-image:url(${props => props.image});
    
    @media(min-width:2520px){
        width:18%;
        max-width:100%;
    }

    @media(max-width:800px){
        width:100%;
        max-width:100%;
    }

`;

