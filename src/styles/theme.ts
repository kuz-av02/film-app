import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "hsl(229, 15%, 21%)",
  textColor: "hsl(0, 100%, 100%)",
  header: "hsl(229, 15%, 21%)",
  textColor2: "hsl(0, 0%, 20%)",
  infoIconColor: "#2D2F34",
  iconColor: "hsl(207, 19%, 11%)",
  accentColor1: `hsl(57, 97%, 45%)`,
  accentColor2: "hsl(216, 22%, 18%)",
  shadowColor: "rgba(0,0,0,0.2)",
  red: "#B0150B",
  red2: "#E42B1F",

  richBlackFogra29: "hsl(225, 25%, 9%)",
  richBlackFogra39: "hsl(170, 21%, 5%)",
  raisinBlack: "hsl(228, 13%, 15%)",
  eerieBlack: "hsl(207, 19%, 11%)",
  lightGgray: "hsl(0, 3%, 80%)",
  gunmetal1: "hsl(229, 15%, 21%)",
  gunmetal2: "hsl(216, 22%, 18%)",
  gainsboro: "hsl(0, 7%, 88%)",
  citrine: "hsl(57, 97%, 45%)",
  xiketic: "hsl(253, 21%, 13%)",
  grayX: "hsl(0, 0%, 74%)",
  white: "hsl(0, 100%, 100%)",
  black: "hsl(0, 0%, 0%)",
  jet: "hsl(0, 0%, 20%)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "hsl(0, 0%, 100%)",
  header: "hsl(0, 3%, 80%)",
  textColor: "hsl(229, 15%, 21%)",
  textColor2: "hsl(0, 0%, 20%)",
  infoIconColor: "hsl(229, 15%, 21%)",
  iconColor: "white",
  accentColor1: `hsl(253, 21%, 13%)`,
  accentColor2: "hsl(57, 97%, 45%)",
  shadowColor: "rgba(0,0,0,0.2)",
  red: "#B0150B",
  red2: "#E42B1F",

  richBlackFogra29: "hsl(225, 25%, 9%)",
  richBlackFogra39: "hsl(170, 21%, 5%)",
  raisinBlack: "hsl(228, 13%, 15%)",
  eerieBlack: "hsl(207, 19%, 11%)",
  lightGgray: "hsl(0, 3%, 80%)",
  gunmetal1: "hsl(229, 15%, 21%)",
  gunmetal2: "hsl(216, 22%, 18%)",
  gainsboro: "hsl(0, 7%, 88%)",
  citrine: "hsl(57, 97%, 45%)",
  xiketic: "hsl(253, 21%, 13%)",
  grayX: "hsl(0, 0%, 74%)",
  white: "hsl(0, 100%, 100%)",
  black: "hsl(0, 0%, 0%)",
  jet: "hsl(0, 0%, 20%)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
