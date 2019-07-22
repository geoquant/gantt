import React from "react";
import styled from "styled-components/macro";
import { convertTimeToGanttGrid } from "../utils";

const Appointment = styled.li`
  display: grid;
  grid-column: ${props => props.gridColumn};
  font-weight: 500;
  text-align: left;
  font-size: 14px;
  height: 12px;
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

const BreakTime = styled.li`
  display: grid;
  grid-column: ${props => props.gridColumn};
  font-weight: 500;
  text-align: left;
  height: 100%;
  color: gold;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: repeating-linear-gradient(
    45deg,
    hsl(0, 0%, 80%),
    hsl(0, 0%, 80%) 2px,
    hsl(0, 0%, 97%) 3px,
    hsl(0, 0%, 97%) 9px
  );

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
  console.log(breakTime.start);
  return appointments.map((appointment, idx) => {
    const { type, note, start, end } = appointment;
    return (
      <React.Fragment>
        {breakTime.start && (
          <BreakTime
            key={`${idx}-${start}-${end}`}
            gridColumn={convertTimeToGanttGrid(
              storeHours,
              breakTime.start,
              breakTime.end
            )}
          />
        )}
        <Appointment
          key={`${idx}-${start}-${end}`}
          gridColumn={convertTimeToGanttGrid(storeHours, start, end)}
          type={type}
        >
          {note}
        </Appointment>
      </React.Fragment>
    );
  });
}
