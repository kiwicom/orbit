import styled from "styled-components";

export const StyledDesignTokenColor = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  background: ${({ $color }) => $color};
  border-radius: 10px;
  border: 1px solid #dee7f5;
`;

export const StyledDesignTokenOther = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
`;
