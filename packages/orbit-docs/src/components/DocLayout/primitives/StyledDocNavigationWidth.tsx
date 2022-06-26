import styled from "styled-components";

const StyledDocNavigationWidth = styled.div`
  position: relative;
  width: 22ch;
  height: 100%;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 52px;
    bottom: 0;
    pointer-events: none;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
`;

export default StyledDocNavigationWidth;
