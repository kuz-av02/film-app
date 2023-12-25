import styled from "styled-components"

export const Button = styled.button`

    display: flex;
    flex: 0 0 auto;
    width: 50px;
    width: fit-content;
    height: 50px;
    margin: 0px 0px 0px 20px;
    border: 2px solid ${props => props.theme.citrine};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.accentColor1};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor} ;
    color: ${props => props.theme.textColor};
    &:hover{
        background-color: ${props => props.theme.accentColor2};
        color: white;
        transition: 0.1s;
    }
    &:focus{
        outline: none;   
    }
    cursor: pointer;
    transition: 0.1s;

`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.div`  
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.textSizeTextL};
    font-weight: 600;
`;


