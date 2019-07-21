import React from "react";
import styled from "styled-components/macro";
import { convertTimeToGanttGrid } from "../utils";

const Appointment = styled.li`
  display: grid;
  grid-column: ${props => props.gridColumn};
  font-weight: 500;
  text-align: left;
  font-size: 14px;
  height: 6px;
  color: #fff;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${props =>
    props.theme.appointment[props.type].backgroundColor};
  border: ${props => props.theme.appointment[props.type].borderColor};

  &:before,
  &:after {
    height: 100%;
    top: 0;
    z-index: 4;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;

export default function GanttAppointment(props) {
  const { appointments, storeHours, breakTime } = props;
  return appointments.map((appointment, idx) => {
    const { type, note, start, end } = appointment;
    return (
      <Appointment
        key={`${idx}-${start}-${end}`}
        gridColumn={convertTimeToGanttGrid(storeHours, start, end)}
        type={type}
      >
        {note}
      </Appointment>
    );
  });
}
