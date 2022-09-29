import styled from 'styled-components';

export const ImgGalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[5]}px;

  list-style: none;
`;
