import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
    background-color: #B2D3A8;
  }
  body {
    font: 400 14px 'Roboto', sans-serif;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
      background-color: #B2D3A8;
  }
  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
  }
  body, input {
    font: 16px Roboto, sans-serif;
  }
 
  .page{
    position:absolute;
    top:0;
    left:0;
    right:0;
  }


`;