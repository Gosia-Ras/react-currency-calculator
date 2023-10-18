import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border-radius: 8px;
  padding: 15px;
  max-width: 60vh;
  margin: 0 auto;
  margin-top: 150px;
  @media (max-width: 480px) {
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;
