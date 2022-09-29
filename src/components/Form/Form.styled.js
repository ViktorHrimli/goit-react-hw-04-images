import { Field, Form } from 'formik';
import styled from 'styled-components';

export const HeaderForm = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.accent};
`;

export const Serchbar = styled(Form)`
  position: relative;
`;

export const InputForm = styled(Field)`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[4] + 10}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};

  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} green;
    box-shadow: 2px 2px 3px green;
  }
`;
