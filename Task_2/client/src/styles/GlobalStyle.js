import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Your global styles go here */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  /* Example: Set default font and background color */

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
  /* Add more global styles as needed */

  body {
  /* background-color: ${({ theme }) => theme.colors.body_dark_bg};; */
  /* background-color: ${({ theme }) => theme.colors.dark.grey};; */
  color:  ${({ theme }) =>
    theme.colors
      .white};; /* Set text color to white for better readability on dark background */
  font-size: 1.6rem;

}
.glassy-element {
  background-color: rgba(255, 255, 255, 0.15); /* Use rgba to set transparency */
  backdrop-filter: blur(10px); /* Create a blurred background effect */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box-shadow for depth */
}


  h1,
h2,
h3,
h4 {
   font-family: 'Josefin Sans', sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


`;

export default GlobalStyles;
