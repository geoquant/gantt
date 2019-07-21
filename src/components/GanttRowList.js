import React from "react";
import styled from "styled-components/macro";
import GanttColumns from "./GanttColumns";
import GanttRow from "./GanttRow";

const GanttRows = styled.div`
  display: grid;
  overflow: hidden;
  border-radius: 12px;
`;

export default function GanttRowList(props) {
  const { groomers, storeHours } = props;
  return (
    <GanttRows>
      {/** TODO: fix columns overflowing below their parent container */}
      <GanttColumns storeHours={storeHours} />
      {groomers.map(groomer => {
        return (
          <GanttRow
            key={groomer.groomerName}
            storeHours={storeHours}
            groomer={groomer}
          />
        );
      })}
    </GanttRows>
  );
}
