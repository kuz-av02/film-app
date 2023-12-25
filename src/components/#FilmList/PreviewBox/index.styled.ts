import styled from 'styled-components';

export const Hero =styled.div`
position: relative;
    min-height: 750px;
    height: 100vh;
    width: 100%;
    max-height: 1000px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-block: var(--section-padding);
    color: ${props=> props.theme.white};
`

export const Container = styled.div`
    padding-inline: 15px;
    z-index: 100;
    margin: 0 auto;
`

export const BG = styled.img`
position: absolute;
top: 0;
right:0;
background-size: cover;
    background-position: center;
    min-height: 750px;
    height: 100vh;
    max-height: 1000px;
`
  
  export const HeroContent = styled.div`
   margin-top: 60px;
   
`
  export const MetaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px 25px;
  margin-bottom: 50px;
  `
export const Btn = styled.a`
color: ${props=> props.theme.white};
font-size: ${props=> props.theme.textSizeTextL};
font-weight: 700;
text-transform: uppercase;
letter-spacing: 2px;
display: flex;
align-items: center;
gap: 10px;
width: 200px;
justify-content: center;
padding: 16px 30px;
background-color: ${props=> props.theme.gunmetal1};
border: 2px solid ${props=> props.theme.citrine};
border-radius: 50px;
transition: var(--transition-1);
`
  export const HeroSubtitle = styled.div`
  color: ${props=> props.theme.citrine};
    font-size: ${props=> props.theme.textSizeTitle};
    font-weight: 700;
    margin-bottom: 10px;
  `
  
  export const HeroTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 60px;
  `
  
export const Strong = styled.strong`
  color: ${props=> props.theme.citrine}; 
  `