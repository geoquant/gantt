import React from "react";
import styled from "styled-components/macro";
import GanttRowList from "./GanttRowList";

const GanttWrap = styled.div`
  display: grid;
  border: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 75px 125px -57px #7e8f94;
`;

export default function Gantt(props) {
  const { storeHours, groomers } = props;
  return (
    <GanttWrap>
      <GanttRowList groomers={groomers} storeHours={storeHours} />
    </GanttWrap>
  );
}
