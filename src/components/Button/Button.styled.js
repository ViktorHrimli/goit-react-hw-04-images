import styled from 'styled-components';
import { GiBrute } from 'react-icons/gi';
export const Icons = styled(GiBrute)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover,
  :focus {
    fill: ${p => p.theme.colors.muted};
  }
`;

export const LoadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  transition: border 250ms, box-shadow 250ms, scale 250ms;
  :hover,
  :focus {
    cursor: pointer;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
    scale: 1.1;
  }
`;

export const BtnIcons = styled.button`
  position: absolute;
  top: 4px;
  right: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
`;
