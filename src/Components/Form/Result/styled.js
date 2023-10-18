import styled from "styled-components";

export const StyledResult = styled.p`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.resultBackground};
  color: ${({ theme }) => theme.colors.fontMain};
  box-shadow: 5px 5px 20px -9px ${({ theme }) => theme.colors.darkGrey};
  margin: 20px -15px;
  font-size: 35px;
  padding: 15px 0;
  min-height: 70px;
`;
