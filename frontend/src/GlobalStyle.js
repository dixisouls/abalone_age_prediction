import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.darkText};
    line-height: 1.6;
  }
  
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.deepBlue};
    font-weight: 600;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  a {
    color: ${(props) => props.theme.colors.teal};
    text-decoration: none;
    transition: ${(props) => props.theme.transition};
    
    &:hover {
      color: ${(props) => props.theme.colors.coral};
    }
  }
  
  button {
    cursor: pointer;
  }
  
  .container {
    width: 100%;
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  .text-center {
    text-align: center;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    .section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyle;
