import React from "react";
// import { upperFirst } from "lodash";
import styled from "styled-components";
import { PageRendererProps } from "gatsby";

// import DocLayout from "../DocLayout";

const StyledWrapper = styled.div`
  .jsondiffpatch-annotated-delta {
    font-size: 12px;
    margin: 0;
    padding: 0 0 0 12px;
    display: inline-block;
  }
  .jsondiffpatch-annotated-delta pre {
    font-size: 12px;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  .jsondiffpatch-annotated-delta td {
    margin: 0;
    padding: 0;
  }
  .jsondiffpatch-annotated-delta td pre:hover {
    font-weight: bold;
  }
  td.jsondiffpatch-delta-note {
    font-style: italic;
    padding-left: 10px;
  }
  .jsondiffpatch-delta-note > div {
    margin: 0;
    padding: 0;
  }
  .jsondiffpatch-delta-note pre {
    font-style: normal;
  }
  .jsondiffpatch-annotated-delta .jsondiffpatch-delta-note {
    color: #777;
  }
  .jsondiffpatch-annotated-delta tr:hover {
    background: #ffc;
  }
  .jsondiffpatch-annotated-delta tr:hover > td.jsondiffpatch-delta-note {
    color: black;
  }
  .jsondiffpatch-error {
    background: red;
    color: white;
    font-weight: bold;
  }
`;

const DataDiffPage = ({ location }: PageRendererProps) => {
  // const { diff, name, trail } = pageContext;
  return <div>kek</div>;

  // return (
  //   <DocLayout location={location} title={upperFirst(name)} path={location.pathname} trail={trail}>
  //     <StyledWrapper>
  //       <div dangerouslySetInnerHTML={{ __html: diff }} />
  //     </StyledWrapper>
  //   </DocLayout>
  // );
};

export default DataDiffPage;
