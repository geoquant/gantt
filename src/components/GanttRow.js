import React from "react";
import styled from "styled-components/macro";
import GannttAppointment from "./GanttAppointment";

// TODO: change background color if no appointments are setup
const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.rowLabelWidth} 1fr;
  min-height: 80px;
  &:nth-child(even) {
    background-color: ${props => props.theme.lightRow};
  }
  &:nth-child(odd) {
    background-color: ${props => props.theme.darkRow};
  }
`;

const RowLabel = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
`;

const RowContent = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.seriesLength}, 1fr)`};
  align-items: center;
`;

export default function GanttRow(props) {
  const { groomerName, groomerTitle, appointments, breakTime } = props.groomer;
  return (
    <RowWrapper>
      <RowLabel>
        <h4>{groomerName}</h4>
        <span>{groomerTitle}</span>
      </RowLabel>
      <RowContent seriesLength={props.storeHours.length}>
        <GannttAppointment
          appointments={appointments}
          storeHours={props.storeHours}
          breakTime={breakTime}
        />
      </RowContent>
    </RowWrapper>
  );
}
