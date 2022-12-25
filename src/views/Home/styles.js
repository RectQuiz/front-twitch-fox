import styled from "styled-components";

export const ImageFundo = styled.div``;

export const Content = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  background-color: #bbdb69;
  padding-top: 165px;

  /* The image used */
  background-image: url("https://scontent.cdninstagram.com/v/t1.15752-9/301549156_4873770669391321_2819051703646609171_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5a057b&_nc_ohc=dC_ynCiOEjAAX_hfKtD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVK4kE9I1sKMi1qHEdJ4ws53zUrcMCkIJUChzYPfTQLCnw&oe=6330F1DD");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BackgroundColor = styled.div`
  width: 100%;
  height: auto;
  background-color: #05060d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 200px;
`;
