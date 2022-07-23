import  styled from 'styled-components';
import {Link} from "react-router-dom";

export const CardItem = styled.li`
  text-decoration: none;
  color: ${props => props.theme.colors.accentColor};
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  padding: 1em;
  border-radius: 1em;
`;

