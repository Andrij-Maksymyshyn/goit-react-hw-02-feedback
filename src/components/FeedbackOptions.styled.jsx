import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  padding: 5px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  box-shadow: 0px 2px 2px darkslategrey;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
