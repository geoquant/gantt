import React from "react";
import styled from "styled-components/macro";

const Columns = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    `${props.theme.rowLabelWidth} repeat(${props.seriesLength}, 1fr)`};
`;

// TODO: make the "n" arguments dynamic on time values
const Column = styled.span`
  display: grid;
  overflow: auto;
  border-right: ${props => props.theme.gridLine};

  &:nth-child(2n) {
    border-right: ${props => props.theme.gridLineDashed};
  }

  &:nth-child(8n + 1) {
    border-right: ${props => props.theme.gridLineBold};
  }
`;

// TODO: handle the "marker", vertical coloring across all rows
export default function GanttColumns(props) {
  const { storeHours } = props;
  return (
    <Columns seriesLength={storeHours.length}>
      {storeHours.map((hr, idx) => (
        <Column key={`${idx}-${hr}`} />
      ))}
    </Columns>
  );
}
