import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  align-items: stretch;
  min-height: 100vh;
`;

export default StyledWrapper;
