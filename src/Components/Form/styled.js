import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  margin: 20px 0px;
`;

export const StyledSelect = styled.select`
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`;

export const CurrencySpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.fontMain};
  background-color: ${({ theme }) => theme.colors.buttonDefault};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.fontMain};
  padding: 10px 25px;
  margin-top: 5px;
  transition: background-color 0.5s, color 0.5s linear;
  margin-bottom: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrencyInfo = styled.p`
  text-align: center;
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.colors.shadowError};
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverBlue};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.fontMain};
  }
`;
