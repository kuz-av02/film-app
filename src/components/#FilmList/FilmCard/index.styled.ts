import styled from "styled-components"
export const MovieCard = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
  
export const Figure = styled.figure`

    position: relative;
    background: ${props => props.theme.gunmetal1};
    aspect-ratio: 2 / 3;
    border-radius: 6px;
    overflow: hidden;
    margin: 0;
    margin-bottom: 20px;
    transition: var(--transition-1);
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        transition: var(--transition-1);
    }
    &:hover { 
        box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.5); 
        &::after { 
            background: hsla(0, 0%, 100%, 0.05);
        }
    }

`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
  
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
`
  
export const CardTitle = styled.h3`
    color: var(--white);
    font-size: var(--fs-7);
    transition: var(--transition-1);
    &:is(:hover, :focus) { 
        color: ${props => props.theme.citrine};
    }
`

export const TitleWrapperTime = styled.span`
    color: ${props => props.theme.citrine};
    font-size: var(--fs-9);
    font-weight: var(--fw-500);
`
  
  export const CardMeta = styled.div`
     display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  `
  
  export const Badge = styled.div`
    color: ${props => props.theme.citrine}; 
    padding: 5px 10px;
    border: 1px solid ${props => props.theme.white};
`

  
  export const Duration = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${props => props.theme.gainsboro};
    font-size: var(--fs-11);
    font-weight: var(--fw-500);
 `

 export const Rating = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 color: ${props => props.theme.gainsboro};
 font-size: var(--fs-11);
 font-weight: var(--fw-500);
`

  
//   export const :is(.duration, .rating) ion-icon {
//     font-size: 13px;
//     --ionicon-stroke-width: 50px;
//     color: var(--citrine);
//   }
  