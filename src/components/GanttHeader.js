import React from "react";
import styled from "styled-components/macro";
import { removeMeridian, removeMinuteIntervals } from "../utils";

const HeaderStyled = styled.div`
  display: grid;
  padding: 10px 0;
  background-color: ${props => props.theme.ganttHeader};
  grid-template-columns: ${props =>
    `${props.theme.rowLabelWidth} repeat(${props.columns}, 1fr)`};
`;

const HeaderLabels = styled.span`
  font-size: 14px;
  text-align: center;
  align-self: center;
  font-weight: bold;
  color: ${props => props.theme.fontGrey};
  transform: translate(-50%, 5%);
`;

export default function GanttHeader(props) {
  const { storeHours } = props;

  // TODO: remove 30 and make it dynamic
  const formateMeridian = removeMeridian(storeHours);
  const formatStoreHours = removeMinuteIntervals(formateMeridian, 30);

  return (
    <HeaderStyled columns={storeHours.length}>
      <span /> {/* This span is the empty cell in the first column */}
      {formatStoreHours.map((hr, idx) => (
        <HeaderLabels key={`${idx}-${hr}`}>{hr}</HeaderLabels>
      ))}
    </HeaderStyled>
  );
}
