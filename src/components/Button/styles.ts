import  styled from 'styled-components';

export const MainBtn = styled.button`
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.white};
  border: none;
  display: block;
  width: 80%;
  padding: 2vh 3vw;
  margin: auto;
  font-size: 20px;
`;

