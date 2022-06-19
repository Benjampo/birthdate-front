import  styled from 'styled-components';

export const LabelInput = styled.label`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.accentColor};
  font-weight: 700;
  border: none;
  display: block;
  width: 100%;
  padding: 2vh 3vw;
  margin: 1em;
  font-size: 20px; 
`;

export const TextInput = styled.input`
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.accentColor};
  border: none;
  display: block;
  width: 100%;
  padding: 2vh 3vw;
  margin: 1em;
  font-size: 20px;
`;

