import styled from 'styled-components';

// .movie-detail {
//     background: url("../images/movie-detail-bg.png") no-repeat;
//     background-size: cover;
//     background-position: center;
//     padding-top: 160px;
//     padding-bottom: var(--section-padding);
//   }
  
//   .movie-detail-banner {
//     position: relative;
//     background: var(--gunmetal-1);
//     max-width: 300px;
//     margin-inline: auto;
//     border-radius: 6px;
//     overflow: hidden;
//     margin-bottom: 50px;
//   }
  
//   .movie-detail-banner img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
  
//   .play-btn {
//     position: absolute;
//     inset: 0;
//     display: grid;
//     place-items: center;
//     font-size: 120px;
//     color: var(--white);
//     transition: var(--transition-1);
//   }
  
//   .play-btn:hover { background: hsla(0, 0%, 0%, 0.25); }
  
//   .detail-subtitle {
//     font-size: var(--fs-5);
//     color: var(--citrine);
//     font-weight: var(--fw-700);
//     margin-bottom: 10px;
//   }
  
//   .detail-title { margin-bottom: 20px; }
  
//   .detail-title strong { color: var(--citrine); }
  
//   .movie-detail .meta-wrapper { margin-bottom: 30px; }
  
//   .storyline {
//     color: var(--gray-x);
//     font-size: var(--fs-9);
//     font-weight: var(--fw-500);
//     line-height: 1.8;
//     margin-bottom: 40px;
//   }
  
//   .details-actions {
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     gap: 20px 40px;
//     max-width: 460px;
//     background: var(--gunmetal-2);
//     padding: 25px;
//     border: 1px solid var(--jet);
//     border-radius: 4px;
//     margin-bottom: 30px;
//   }
  
//   .details-actions .share ion-icon {
//     font-size: 25px;
//     color: var(--white);
//     margin-inline: auto;
//   }
  
//   .details-actions .share span {
//     color: var(--gainsboro);
//     font-size: var(--fs-11);
//     transition: var(--transition-1);
//   }
  
//   .details-actions .share:is(:hover, :focus) span { color: var(--citrine); }
  
//   .details-actions .title {
//     color: var(--white);
//     font-weight: var(--fw-700);
//   }
  
//   .details-actions .text {
//     font-size: var(--fs-11);
//     color: var(--gainsboro);
//   }
  
//   .details-actions .btn-primary {
//     font-size: 10px;
//     padding: 13px 26px;
//     letter-spacing: 0;
//     background: transparent;
//   }
  
//   .details-actions .btn-primary:is(:hover, :focus) { background: var(--citrine); }
  
//   .download-btn {
//     max-width: max-content;
//     background: var(--citrine);
//     color: var(--rich-black-fogra-29);
//     font-size: var(--fs-11);
//     font-weight: var(--fw-500);
//     text-transform: uppercase;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     padding: 20px 35px;
//     letter-spacing: 5px;
//     border-radius: 6px;
//   }
  
//   .download-btn ion-icon { font-size: 16px; }
  

export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;
export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    color: ${props => props.theme.accentColor1};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor2};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr 0.2fr;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: 0.3;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: fit-content;
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr ;
        width: 100%;
    }
`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100px;
    height: 200px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    writing-mode: vertical-lr; 
    // font-size: ${props=>props.theme.textSizeTextM};
    font-size: 20px;
    &:hover{
        opacity: 0.9;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        width: 80px;
        height: 150px;
        font-size: ${props=>props.theme.textSizeTextM};
    }
    @media (max-width: 576px)  {
        width: 100%;
        height: 50px;
        writing-mode: horizontal-tb; 
        font-size: ${props=>props.theme.textSizeTextM};
    }
`;
export const DownloadButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
`;
export const WatchButton = styled(Button)`
    background-color:${props=>props.theme.accentColor2};
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    width: 100%;
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    color: ${props => props.theme.accentColor1};
    letter-spacing: 1px;
    font-weight: 500;
`;

export const Year = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};


`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    color: ${props => props.theme.accentColor1};
    line-height: 25px;
    letter-spacing: 1px;

`;
export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1fr);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
        width: 300px;
    }
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;


export const CommentsTitle = styled.h2`
  display: flex;
  font-size: ${props=> props.theme.textSizeTitle};
  letter-spacing: 1px;
  font-weight: 700;
  color: ${props => props.theme.accentColor1};
  margin-right: 15px;
`
